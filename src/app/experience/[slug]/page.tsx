'use client'

import { use } from 'react'
import { useParams } from 'next/navigation'
import { Text } from '@/components/components'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'




import edifier from "./../../../edifier.webp"
import procurify from "./../../../procurify.png"
import stayfresh from "./../../../stayfresh.jpeg"
import quantico from "./../../../quantico.jpg"

const imgTitle: Record<string, StaticImageData> = {
    edifier,
    procurify,
    stayfresh,
    quantico,
}


type Props = {
  params: {slug : string}
}

import { Header } from "@/components/components"

const experiences = [
    "procurify",
    "stayfresh",
    "quantico",
    "edifier"

]

const experienceData = {
  procurify: {
    company: "Procurify",
    title: 'Software Engineer Intern',
    date: 'Incoming Fall 2025',
    description: "Working in Procurify's Engineering Team on their spend management system",
    techstack: "Python, Django, React, Typescript, AWS, Docker, Kubernetes",
    bullets: [
        "More Coming Soon!"
    ]
  },
  stayfresh: {
    company: "Stay Fresh",
    title: 'Software Developer',
    date: 'January - April 2024',
    description: "Worked on Stay Fresh's mobile app",
    techstack: "Javascript, Node.js, React Native, Express",
    bullets: [
        "Designed and developed product, shop, and account pages using React Native, collaborating with product/design teams to deliver scalable components",
        "Took ownership of API development, designing and implementing 15+ RESTful endpoints with Node.js and Express, including secure user session management via JWT authentication",
        "Analyzed and optimized app performance, reducing load times by 20% and improving responsiveness through frontend optimization and refactoring"
    ]
  },
  // add more experiences...
  quantico: {
    company: "UBC Quantico Research",
    title: 'Software Developer',
    date: 'January 2025 - Present',
    description: "Working on machine learning models and fintech apps",
    techstack: "Python, Tensorflow, AWS, Golang",
    bullets: [
        "Refactored TimeGAN model for Stock Forecasting in TensorFlow 2; improved training performance by 60% through leveraging AWS EC2 instance",
        "Implemented modules for a Python backtesting framework, contributing core logic to support evaluation of trading strategies on 10+ years of stock data",
        "Led weekly planning meetings, shared implementation ideas with the team, and presented project progress and trade-offs during team demo sessions"
    ]

  },
  edifier: {
    company: "Edifier",
    title: 'Marketing/Sales Intern',
    date: 'June - July 2023',
    description: "Edifier's sales/marketing team",
    techstack: "Javascript, Node.js, React Native, Express",
    bullets: [
        "Contributed actively to 3 product and market research projects at Edifier Beijing, leveraging my experience to provide unique perspectives on international market preferences",
        "Delivered successful client engagements by developing concise product presentations for clients, highlighting key features, strengths, and competitive advantages of our products"
    ]

  }
}

export default function ExperienceDetailPage({ params }: Props) {
//   const {slug}: string = use<string>(params);
  const { slug } = useParams() as { slug: string };
  //
  const [data, setData] = useState(experienceData[slug as keyof typeof experienceData]);
  const router = useRouter();

  const [selectId, setSelectId] = useState(experiences.indexOf(slug))

  useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "s") {
          router.push("/experience")
        }
        else if (e.key === "ArrowDown") {
                setSelectId((selectId + 1) % experiences.length)
                router.push(`/experience/${experiences[selectId]}`)
              }
              else if (e.key === "ArrowUp") {
                setSelectId((selectId - 1 + experiences.length) % experiences.length)
                router.push(`/experience/${experiences[selectId]}`)
            }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
    }, [router, selectId])

  const image = imgTitle[slug] ?? ""
  console.log(image)

  if (!data) {
    return <div>Experience not found</div>;
  }

  return (
    <div className='h-dvh'>
    <Header></Header>
    <main className="bg-[#FFFDFA] h-9/10 flex flex-col justify-start items-center">

        {/* BOX */}
        <div className='flex flex-col w-8/10 h-9/10 justify-start'>
            {/* HEADER */}
            <div className='flex w-full h-15/100 items-center border-2 rounded-sm border-black-300/25 '>
                <div className='flex w-1/2 h-full items-center pl-5'>
                    <Text text = "Experience Info" size = "3xl"></Text>
                </div>

                <Link href = "/experience" className='flex w-1/2 h-full items-center justify-end pr-5'>
                    <Text text = "Go Back" size = "3xl"></Text>
                </Link>

            </div>

            <div className='h-85/100 flex flex-row items-center w-full items-center justify-center gap-24'>
                {/* LEFT SIDE IMAGE/TITLE */}
                <div className='flex w-40/100 h-full items-start justify-end mt-25'>
                    <div className='flex flex-col w-65/100 h-8/10 items-center border-2 rounded-sm border-black-300/25'>
                            <div className='justify-center items-center mt-4'>
                                 <Text text = {data.date} size = "2xl" align='center'></Text>
                            </div>
                            <div className='pt-3 w-6/10'>
                            <Image src = {image} alt = "image" className='justify-center border-2 border-black-300/25'/>
                            </div>
                            <div className='justify-center items-center'>
                                 <Text text = {data.title} size = "2xl" align='center'></Text>
                            </div>
                            <div className='justify-center items-center'>

                            <Text text = {data.company} size = "2xl" align='center'></Text>
                            </div>
                    </div>
                </div>

                {/* RIGHT SIDE DESC, TECH STACK, BULLET POINTS */}
                <div className='flex flex-col w-60/100 gap-4 h-8/10'>
                    <div className='w-full h-25/100 flex flex-col'>
                        <Text text = "Description" size = "3xl"></Text>
                        <Text text = {data.description} size = "2xl"></Text>

                    </div>
                    {  (data.company !== "Edifier" ?
                    <div className='w-full h-25/100 flex flex-col'>
                        <Text text = "Tech Stack" size = "3xl"></Text>
                        <Text text = {data.techstack} size = "2xl"></Text>

                    </div>
                    : <></>)}

                   <div className='w-full h-1/2 flex flex-col gap-2'>
                    <Text text="Highlights" size="3xl" />
                    <div className='flex flex-col gap-2 pl-4'>
                        {data.bullets.map((text, index) => (
                        <Text key={index} text={`• ${text}`} size='xl' />
                        ))}
                    </div>
                    </div>

                </div>


            </div>


        </div>

    </main>
    </div>
  );
}
