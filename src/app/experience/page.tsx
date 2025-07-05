'use client'

import {useState, useEffect} from 'react'

import {Header, TextBox, Text, hMap, wMap} from "../../components/components"

import clsx from 'clsx'


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


      <div className='h-125/1000 w-full flex flex-col'>
      <div className='flex h-full w-1/2 items-center'>
      <TextBox text = "dfd" background='purple' height= "95" width='100'></TextBox>
          </div>

      </div>
    </main>
  );
}
