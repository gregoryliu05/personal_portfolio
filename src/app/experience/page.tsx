'use client'

import {useState, useEffect} from 'react'

import {Header, TextBox, Text, hMap, wMap} from "../../components/components"
import { useRouter } from 'next/navigation';
import Image from 'next/image';


import clsx from 'clsx'

import Link from 'next/link';

import edifier from "./../../edifier.webp"
import procurify from "./../../procurify.png"
import stayfresh from "./../../stayfresh.jpeg"
import quantico from "./../../quantico.jpg"


// True IS NON EMPTY EXP
// False is EMPTY EXP
export const workExp = [
  { type: "header",
    title: "software engineer intern",
    company: "procurify",
    location: "vancouver, bc",
    date: "incoming fall 2025",
    link: "procurify",
    img: procurify
  },
  { type: true,
    title: "software developer intern",
    company: "stay fresh",
    location: "richmond, bc",
    date: "january - april 2024",
    link: "stayfresh",
    img: stayfresh
  },
  { type: true,
    title: "software developer",
    company: "ubc quantico research",
    location: "vancouver, bc",
    date: "january 2025 - present",
    link: "quantico",
    img: quantico
  },
  { type: true,
    title: "marketing/sales intern",
    company: "edifier",
    location: "beijing, china",
    date: "june - july 2023",
    link: 'edifier',
    img: edifier
  },
  // { type: false

  // },
  // { type: false

  // }
]

type infoBoxProps = {
  text: string;
  className?: string;
}


const InfoBox = ({ text, className }: infoBoxProps) => {
  return (
    <h1 className={clsx('text-2xl font-emerald text-white drop-shadow-[0_4px_2px_rgb(0_0_0_/_0.67)]', className)}>
      {text}
    </h1>
  );
};


export default function ExperiencePage() {
  const router = useRouter()
  const [selectId, setSelectId] = useState(0)

  useEffect(() => {
  router.prefetch('/experience/stayfresh');
  router.prefetch('/experience/procurify');
  router.prefetch('/experience/edifier');
  }, []);


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "s") {
        router.push("/")
      }
      else if (e.key === "ArrowDown") {
        setSelectId((selectId + 1) % workExp.length)
        console.log(selectId)
      }
      else if (e.key === "ArrowUp") {
        setSelectId((selectId - 1 + workExp.length) % workExp.length)
        console.log(selectId)
    } else if (e.key === "ArrowLeft") {
      if (selectId == 1) {
        setSelectId((selectId - 1 + workExp.length) % workExp.length)
        console.log(selectId)
      }

    } else if (e.key === "ArrowRight") {
      if (selectId == 0) {
         setSelectId((selectId + 1) % workExp.length)
          console.log(selectId)
      }

    }
     else if (e.key === "d") {
        router.push(`/experience/${workExp[selectId].link}`)

    }
  }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectId, router])

  return (
    <main className='flex-cols bg-[#fffdfa] h-dvh'>
      <header className="h-1/10">
      <Header></Header>
      </header>


      <div className='h-800/1000 w-full flex flex-row pl-20 pr-20 pt-10 items-center justify-center'>

      {/* FIRST EXPERIENCE MAIN ONE */}
      <section className='flex h-full w-[40%] items-start justify-end pt-20'>
      {/* box */}
        <Link href= {`/experience/${workExp[0].link}`}
                        onMouseEnter={() => setSelectId(0)}
                        onFocus={() => setSelectId(0)}
        className={clsx('flex flex-col justify-end w-[80%] h-[48.96%] border-2 rounded-lg pb-2', selectId == 0 ? "border-[#fb702e] bg-[#79D1ed]": "border-black bg-[#3693e2]")}>
          <section className='flex flex-row'>
            <div className='ml-1 w-[21%]'>
            <Image className='flex h-full justify-center rounded-full' src = {procurify} alt = "arrow" />
            </div>
            <div className='pl-3 flex flex-col'>
              <InfoBox text = {workExp[0].title ?? ""}></InfoBox>
               <InfoBox text = {workExp[0].company ?? ""}></InfoBox>
            </div>
          </section>
          <section className='flex flex-col items-end pr-3'>
             <InfoBox text = {workExp[0].location ?? ""}></InfoBox>
              <InfoBox text = {workExp[0].date ?? ""}></InfoBox>

          </section>
        </Link>
      </section>


      {/* THE REST OF THEM HERE */}
      <section className='flex flex-col h-full w-[60%] items-center gap-4'>
        {workExp.map((item, index) => {
                switch (item.type) {
                  case true:
                    return <Link key = {index}
                    onMouseEnter={() => setSelectId(index)}
                    onFocus={() => setSelectId(index)} className= {clsx('flex flex-row h-[14%] w-[90%] justify-center gap-1 border-2 rounded-lg items-center',
                      index == selectId ? "border-[#fb702e] bg-[#79D1ed]": "border-black bg-[#3693e2]"

                    )}
                    href = {`/experience/${item.link}`}>
                            <div className='ml-1 w-1/10'>
                            <Image className='flex mr-auto w-full justify-center rounded-full' src = {item.img ?? ""} alt = "arrow"/>
                          </div>
                            <section className='flex ml-1 flex-col items-start self-center w-1/2 mr-auto'>
                              <InfoBox text = {item.title ?? ""} className='justify-start'></InfoBox>
                              <InfoBox text = {item.company ?? ""}className='text-left'></InfoBox>
                            </section>

                            <section className='flex flex-col items-end ml-auto pr-2 w-3/10'>
                              <InfoBox text = {item.location ?? ""}></InfoBox>
                              <InfoBox text = {item.date ?? ""}></InfoBox>
                            </section>
                    </Link>
                  case false:
                    return <div key = {index} className='flex h-[14%] w-[90%] justify-center gap-1 border-2 rounded-lg items-center '>
                      <h1 className='text-2xl font-emerald text-pokemon drop-shadow-[0_2px_2px_rgb(0_0_0_/_0.67)] justify-center'> More to Come!</h1>
                    </div>
                }

            })}
        <div  className='flex h-[14%] w-[90%] justify-center gap-1 border-2 rounded-lg items-center '>
                      <h1 className='text-2xl font-emerald text-pokemon drop-shadow-[0_2px_2px_rgb(0_0_0_/_0.67)] justify-center'> More to Come!</h1>
                    </div>
                    <div className='flex h-[14%] w-[90%] justify-center gap-1 border-2 rounded-lg items-center '>
                      <h1 className='text-2xl font-emerald text-pokemon drop-shadow-[0_2px_2px_rgb(0_0_0_/_0.67)] justify-center'> More to Come!</h1>
                    </div>

      </section>


      </div>


      <div className='h-100/1000 w-full flex flex-row justify-start'>
      <div className='h-full flex flex-cols w-1/2 items-start justify-start pl-1'>
      <TextBox text = "Choose an Experience to Learn More!" background='purple' height= "95" width='60' size = "3xl" justify='start'></TextBox>
          </div>

      <div className='flex flex-row h-full w-[50%] justify-end'>

     <div className=" flex items-center  justify-end w-1/2 h-full pr-2">

         {/* Rectangular Pill */}

        <Link  href = {`/`} className="bg-[#766d95] h-[66%] w-[66%] rounded-sm flex border-2 border-black items-center justify-center pr-2 hover:bg-[#978ac1]">
        <h1 className='text-shadow-[0_2px_4px_rgb(0_0_0_/_0.25)]
            text-white text-3xl'>
                EXIT
                </h1>
        </Link>

    </div>

      </div>

      </div>
    </main>
  );
}
