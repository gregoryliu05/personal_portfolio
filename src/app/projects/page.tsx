'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import blacksqr from "./../../Blacksqr.png"
import redsqr from "./../../Redsqr.png"
import ubc from "./../../ubc.png"
import schedule from "./../../schedule.jpg"
import location from "./../../location.png"
import leftArrow from "./../../leftArrow.png"
import rightArrow from "./../../arrow.png"
import { Header } from '@/components/components'
import nba from "./../../nba.png"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const projects = [
  {
    title: 'NBA Fantasy Projections',
    description:
      'A web app designed to predict the best NBA players to pick in your fantasy basketball league.',
    tech: ['Javascript', 'React', 'Python', 'Pandas', 'SQLite', 'Node.js', 'Flask'],
    image: nba,
    github: 'https://github.com/gregoryliu05/nba_fantasy_projections'
  },
  {
    title: 'InsightUBC',
    description:
      'A web app that delivers insights on UBC courses, featuring data parsing, geolocation integration, and data visualizations.',
    tech: ['TypeScript', "React", "Node.js", "Chart.js", "Express", "Mocha", "Chai"],
    image: ubc,
    github: 'https://github.com/gregoryliu05/ubc_courses'
  },
  {
    title: 'Tourist Attraction Platform',
    description:
      'A full-stack application for booking tourist attractions and events, with user authentication, and review features.',
    tech: ['Javascript', 'React', "Node.js", "Express", "SQL", "MySQL"],
    image: location,
    github: 'https://github.com/gregoryliu05/Tourist_Attraction_Application'
  },
  {
    title: 'Schedule Maker',
    description:
      'A desktop application that lets users create, save, and modify custom schedules, complete with persistent storage.',
    tech: ['Java', "Java Swing", "JUnit"],
    image: schedule,
    github: 'https://github.com/yourusername/nba-fantasy-projections'
  },
  // add more projects here
]

export default function ProjectsPage() {
  const [index, setIndex] = useState(0)
  const current = projects[index]
  const router = useRouter();

  useEffect(() => {
    const handleKey = (e:KeyboardEvent) => {
        if (e.key.toLowerCase() === "s") {
            router.push("/")
        }

        else if (e.key === "ArrowLeft") {
            handleLeft()
        }
        else if (e.key === "ArrowRight") {
            handleRight()
        }

    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener('keydown', handleKey)

  }, [index, router])

  const handleLeft = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }
  const handleRight = () => {
    setIndex((prev) => (prev + 1) % projects.length)
  }

  return (
    <main className="h-dvh w-full bg-[#FFFDFA] flex flex-col font-pokemon">
      <Header />
      <div className='flex mx-auto w-8/10 h-9/10 mt-3'>

        {/* LEFT SIDE */}
        <div className='flex flex-col w-45/100'>
          {/* TOP TEXT BAR */}
          <div className='flex flex-row items-center w-[85%] mx-auto h-[10%] bg-[#ffe997] border-2 rounded-md justify-between px-2'>
            <Image src={leftArrow} alt="left" width={20} height={20} onClick={handleLeft} className='cursor-pointer' />
            <h1 className='sm:text-md md:text-2xl lg:text-4xl text-pokemon text-center drop-shadow-[0_2px_4px_rgb(0_0_0_/_0.25)]'>{current.title}</h1>
            <Image src={rightArrow} alt="right" width={20} height={20} onClick={handleRight} className='cursor-pointer' />
          </div>

          {/* DOT BAR */}
          <div className='flex flex-row w-[50%] mx-auto h-[5%] justify-center items-center gap-2'>
            {projects.map((_, i) => (
              <Image
                key={i}
                src={index === i ? redsqr : blacksqr}
                alt="dot"
                width={index === i ? 10 : 7}
                height={index === i ? 10 : 7}
              />
            ))}
          </div>

          {/* IMAGE */}
          <div className='h-[40%] w-9/10 relative mx-auto bg-gray-300'>
            <Image src={current.image} alt="project" fill className='object-contain bg-[#fffdfa]' />
            <a href={current.github} target='_blank' rel='noopener noreferrer' className='absolute bottom-1 left-8'>
              <div className='bg-white px-2 py-1 border border-black rounded-sm text-sm'>GitHub Link</div>
            </a>
          </div>

          {/* BOTTOM TEXT */}
          <div className='flex w-9/10 h-[30%] ml-auto bg-[#FFFFFF] border-[#878787] border-t-2 border-l-2 border-b-2 rounded-tl-lg rounded-bl-lg p-3'>
            <p className='text-[17px] md:text-2xl lg:text-3xl'>{current.description}</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='flex w-55/100 h-[87%] border-2 border-black rounded-md bg-[#ffe997] items-center justify-center'>
          <div className='h-9/10 w-96/100 flex flex-col bg-[#FFFFD4] justify-start items-start p-5'>
            <h1 className='text-4xl font-bold flex items-center gap-2 drop-shadow-[0_2px_4px_rgb(0_0_0_/_0.25)]'>
              Tech Stack:
            </h1>
            <ul className='pl-2 mt-2 text-3xl drop-shadow-[0_2px_4px_rgb(0_0_0_/_0.25)]'>
              {current.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <Link href= "/" className='mt-auto text-4xl pt-5 drop-shadow-[0_2px_4px_rgb(0_0_0_/_0.25)]'>CLOSE PROJECTS</Link>
          </div>
        </div>

      </div>
    </main>
  )
}
