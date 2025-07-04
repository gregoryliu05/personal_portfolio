'use client'

import clsx from 'clsx';

import { useEffect, useState } from "react";
import {Text, TextBox, backgroundMap, Header} from "../components/components"

import {NavBar} from "../components/navBar"

export default function Home() {
  const [isPopup, setIsPopup] = useState(false)
  const [time, setTime] = useState(new Date().toLocaleTimeString())

   useEffect(() => {
          const handleKeyDown = (e: KeyboardEvent) => {
              if (e.key === "Enter") {
                  setIsPopup(!isPopup)
              }
          }
          window.addEventListener('keydown', handleKeyDown);
          return () => window.removeEventListener('keydown', handleKeyDown);
      }, [isPopup])

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
      <header className = "h-1/10">
        <Header></Header>
        {/* <div className="flex w-1/2 justify-start pl-3">
          <Text size = "2xl" text = 'Greg Liu'/>
          </div>
        <div className="flex w-1/2 justify-end pr-3">
          <Text size = "2xl" text = {time}/>
          </div> */}
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
        {(isPopup? <NavBar background='purple' isPopup = {isPopup} setIsPopup = {setIsPopup}/>
        :
        <button className='flex w-1/2 items-center' onClick = {() => {
          (setIsPopup(true))
        }}>
        <Text text = "press (START) or click here for more about me" size = "2xl"/>
        </button>
        )}
      </div>

      </div>

      {/* TODO  */}
      {/* Footer */ }
      <footer className= "flex justify-center h-1/10">
        <div className="flex w-full h-full justify-start">
         <div className='flex w-9/10 justify-start items-start pl-1'>
                     <section className= {clsx(
                         backgroundMap["purple"] ?? '',
                         "flex",
                         "w-6/10",
                         "h-10/10",
                         "justify-center",
                         "items-center",
                         "rounded-sm",
                         "ring-2",
                         "ring-black/75"
                     )}>
                         <section className= "flex bg-white w-97/100 h-9/10 rounded-sm inset-ring-2 inset-ring-whitesd">
                             <span className='pl-3 pt-1 flex-row'>
                                <h1 className='font-emerald
                                  text-shadow-[0_2px_1px_rgb(0_0_0_/_0.20)]
                                  text-[#FFBC61]
                                  text-2xl' > Optional Controls:</h1>
                             <Text text = '(S) = A | (D) = B | (ENTER) = START| ARROW KEYS to navigate' size = "lg" align = "left"/>
                             </span>
                             <h1>
                             </h1>
                         </section>
                     </section>
                     </div>
          </div>
        <div className="flex w-1/2 justify-end items-end">
           {/* <image></image> */}
          <h1>website inspired by pokemon ruby/sapphire/emerald</h1>
        </div>
      </footer>




    </main>
  );
}
