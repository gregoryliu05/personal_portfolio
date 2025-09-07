'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import { Header, Text } from '@/components/components'

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

const experiences = ["procurify", "stayfresh", "quantico", "edifier"] as const

const experienceData = {
  procurify: {
    company: "Procurify",
    title: 'Software Engineer Intern',
    date: 'September 2025 - Present',
    description: "Working in Procurify's Engineering Team on their spend management system",
    techstack: "Python, Django, React, Typescript, AWS, Docker, Kubernetes",
    bullets: ["More Coming Soon!"]
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
    title: 'Marketing & Sales Intern',
    date: 'June - July 2023',
    description: "Edifier's sales/marketing team",
    techstack: "Javascript, Node.js, React Native, Express",
    bullets: [
      "Contributed actively to 3 product and market research projects at Edifier Beijing, leveraging my experience to provide unique perspectives on international market preferences",
      "Delivered successful client engagements by developing concise product presentations for clients, highlighting key features, strengths, and competitive advantages of our products"
    ]
  }
} as const

export default function ExperienceDetailPage() {
  const { slug } = useParams() as { slug: keyof typeof experienceData }
  const data = experienceData[slug]
  const router = useRouter()

  const [selectId, setSelectId] = useState<number>(
    Math.max(0, experiences.indexOf(slug as (typeof experiences)[number]))
  )

  useEffect(() => {
    router.prefetch('/experience/stayfresh')
    router.prefetch('/experience/procurify')
    router.prefetch('/experience/edifier')
  }, [router])

  // Keyboard shortcuts: s to go back, arrows to move
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 's') {
        router.push('/experience')
      } else if (e.key === 'ArrowDown') {
        setSelectId(prev => {
          console.log(selectId)
          const next = (prev + 1) % experiences.length
          router.push(`/experience/${experiences[next]}`)
          return next
        })
      } else if (e.key === 'ArrowUp') {
        setSelectId(prev => {
          const next = (prev - 1 + experiences.length) % experiences.length
          router.push(`/experience/${experiences[next]}`)
          return next
        })
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [router, selectId])

  const image = imgTitle[slug] ?? undefined
  if (!data) return <div>Experience not found</div>

  return (
    <div className="min-h-dvh bg-[#FFFDFA]">
      <Header />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-10 pt-4">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-2 border-black/30 rounded-md px-4 py-3">
          <Text text="Experience Info" size="3xl" />
          <Link href="/experience" className="underline-offset-4 hover:underline">
            <Text text="Go Back" size="2xl" />
          </Link>
        </div>

        {/* Content */}
        <div
          className="
            mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8
            items-start
          "
        >
          {/* Left: Image & Meta */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md border-2 border-black/30 rounded-md p-4">
              <div className="text-center">
                <Text text={data.date} size="2xl" align="center" c="text-center" />
              </div>

              {image && (
                <div className="mt-4">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm border-2 border-black/30">
                    <Image
                      src={image}
                      alt={`${data.company} image`}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              )}

              <div className="mt-4 space-y-1 text-center">
                <Text text={data.title} size="2xl" align="center" c="text-center" />
                <Text text={data.company} size="2xl" align="center" c="text-center" />
              </div>
            </div>
          </div>

          {/* Right: Description / Tech / Bullets */}
          <div className="flex flex-col gap-6">
            <section>
              <Text text="Description" size="3xl" />
              <Text
                text={data.description}
                size="xl"
                // a little more readable on mobile
                c="leading-relaxed"
              />
            </section>

            {data.company !== "Edifier" && (
              <section>
                <Text text="Tech Stack" size="3xl" />
                <Text text={data.techstack} size="xl" />
              </section>
            )}

            <section>
              <Text text="Highlights" size="3xl" />
              <ul className="mt-2 space-y-2 pl-4 list-disc">
                {data.bullets.map((t, i) => (
                  <li key={i}>
                    <Text text={t} size="lg" />
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
