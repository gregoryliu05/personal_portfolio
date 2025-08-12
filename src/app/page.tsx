'use client'

import clsx from 'clsx';

import { useEffect, useState } from "react";
import {Text, TextBox, backgroundMap, Header} from "../components/components"
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import me from "./../characterme.png"
import Image from 'next/image';


import {NavBar} from "../components/navBar"

export default function Home() {
  const [isPopup, setIsPopup] = useState(false)
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [showContact, setShowContact] = useState(false)
  const handleCloseContact = () => setShowContact(false)

   useEffect(() => {
          const handleKeyDown = (e: KeyboardEvent) => {
              if (e.key === "Enter") {
                  setIsPopup(!isPopup)
              }
              if (e.key.toLowerCase() === "s" && showContact) {
                setShowContact(false)
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
      </header>

      {/* MAIN BODY PART */}
      <div className= "flex h-8/10">
      {/* CENTER COMPONENT*/}
      <div className="w-1/4"></div>
      <div className = "flex-col w-1/2 items-center">
        <section className= "flex h-1/8 justify-center">
        <span className="items-center">
          <Text text = "Welcome to My Portfolio!" size = "4xl" align = "center"/>
          </span>
          </section>

       <Image
          src={me}
          alt="me"
          width={1170}
          height={1562}
          className="w-full h-auto max-h-80 object-contain mx-auto"
        />


        <section className="flex h-3/8 w-full justify-center">
        <TextBox text = "Hi! My Name is Greg. Nice to meet you!" background = "green" height='h-1/3' width='w-8/10' size = "2xl" justify='center'/>
        </section>
      </div>

      {/* Side Popup */}
      <div className="flex w-1/4 items-center justify-end">
        {(isPopup? <NavBar background='purple' isPopup = {isPopup} setIsPopup = {setIsPopup} setShowContact={setShowContact}  />
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

      {/* CONTACT MODAL */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#FFFDFA] border-2 border-black/75 rounded-md w-4/5 max-w-md p-6 shadow-lg font-pokemon"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-[#717171] ">Contact Me!</h2>
                <button onClick={() => setShowContact(false)}>
                  <X className="w-6 h-6 hover:text-red-500" />
                </button>
              </div>
              <ul className="text-xl leading-relaxed space-y-2">
                <li className='text-[#717171]'>📧 Email: <a href="mailto:gregoryliu123@email.com" target = "_blank" className="underline text-[#717171]">gregoryliu123@email.com</a></li>
                <li className='text-[#717171]'>💼 LinkedIn: <a href="https://linkedin.com/in/gregoryliu" target = "_blank" className="underline text-[#717171]">/gregoryliu</a></li>
                <li className='text-[#717171]'>💻 GitHub: <a href="https://github.com/gregoryliu05" target = "_blank" className="underline text-[#717171]">/gregoryliu05</a></li>
                <li className='text-[#717171]'>📱 Phone: (778) 238-8103</li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>




    </main>
  );
}
