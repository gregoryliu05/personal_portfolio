'use client'

import clsx from 'clsx';

import { useEffect, useState } from "react";
import {Text, TextBox} from "../components/components"

import {NavBar} from "../components/navBar"

export default function Home() {
  const [isPopup, setIsPopup] = useState(true)
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  // my home page
  return (
    <main className="flex-cols h-dvh bg-[#fffdfa]">
      {/* TOP HEADER */}
      <header className = "flex justify-center h-1/10">
        <div className="flex w-1/2 justify-start pl-3">
          <Text size = "2xl" text = 'Greg Liu'/>
          </div>
        <div className="flex w-1/2 justify-end">
          <Text size = "2xl" text = {time}/>
          </div>
      </header>

      {/* MAIN BODY PART */}
      <div className= "flex h-8/10">
      {/* CENTER COMPONENT*/}
      <div className="w-1/4"></div>
      <div className = "flex-col w-1/2 items-center">
        <section className= "flex h-1/8 justify-center">
        <span className="items-center">
          <Text text = "Welcome to My Personal Site!" size = "3xl" align = "center"/>
          </span>
          </section>

        {/* <image></image> */}
        <h1 className="flex h-4/9 justify-center"> PUT IMAGE HERE </h1>

        <section className="flex h-3/8 w-full justify-center">
        <TextBox text = "Hi! My Name is Greg. Nice to meet you!" background = "green"/>
        </section>
      </div>

      {/* Side Popup */}
      <div className="flex w-1/4 items-center justify-end">
        {(isPopup? <NavBar background='purple'/>
        :
        <div className='flex w-1/2 items-center'>
        <Text text = "press (START) or click here for more about me" size = "2xl"/>
        </div>
        )}
      </div>

      </div>


      {/* Footer */ }
      <footer className= "flex justify-center h-1/10">
        <div className="flex w-1/2 justify-start">
          Optional Controls
          </div>
        <div className="flex w-1/2 justify-end">
           {/* <image></image> */}
          <h1>Play some music</h1>
        </div>
      </footer>




    </main>
  );
}
