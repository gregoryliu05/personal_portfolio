'use client'

import {useState, useEffect} from 'react'

import {Header, TextBox, Text, hMap, wMap} from "../../components/components"

import clsx from 'clsx'

import Link from 'next/link';


const workExp = [
  { title: "swe",
    company: "procurify",
    date: "test"
  },
  { title: "swe",
    company: "procurify",
    date: "test"
  },
  { title: "swe",
    company: "procurify",
    date: "test"
  },
  { title: "swe",
    company: "procurify",
    date: "test"
  },
  { title: "swe",
    company: "procurify",
    date: "test"
  },
  { title: "swe",
    company: "procurify",
    date: "test"
  }
]

export default function ExperiencePage() {
  return (
    <main className='flex-cols bg-[#fffdfa] h-dvh'>
      <header className="h-1/10">
      <Header></Header>
      </header>


      <div className='h-775/1000 w-full flex'>
        <h1 className='h-full'> hi</h1>
      </div>


      <div className='h-125/1000 w-full flex flex-row'>
      <div className='h-full flex-cols w-1/2 items-center'>
      <TextBox text = "Choose an Experience to Learn More!" background='purple' height= "95" width='100' size = "4xl"></TextBox>
          </div>

      <div className='flex flex-row h-full w-[50%] justify-end'>

     <div className=" flex items-center  justify-end w-1/2 h-full pr-2">

         {/* Rectangular Pill */}

        <Link  href = {`/`} className="bg-[#6D5BA8] h-[66%] w-[66%] rounded-sm flex border-2 border-black items-center justify-center pr-2">
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
