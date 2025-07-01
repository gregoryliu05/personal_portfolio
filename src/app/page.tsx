'use client'
import { useEffect, useState } from "react";

type TextProps = {
  text: string;
  size: string;
};

const Text = ({text, size}: TextProps) => {
  return <span className={`text-${size} font-emerald text-shadow-[0_2px_2px_rgb(0_0_0_/_0.25)] text-pokemon`}>
    {text}
  </span>
}

export default function Home() {
  const [isPopup, setIsPopup] = useState(false)
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
  }, [])

  // my home page
  return (
    <main className="flex-cols h-dvh bg-[#fffdfa]">
      {/* TOP HEADER */}
      <header className = "flex justify-center h-1/10">
        <div className="flex w-1/2 justify-start">
          <Text size = "lg" text = 'Greg Liu'/>
          </div>
        <div className="flex w-1/2 justify-end">
          <h1 className= "justify-end">{time}</h1>
          </div>
      </header>

      {/* MAIN BODY PART */}
      <div className= "flex h-8/10">
      {/* CENTER COMPONENT*/}
      <div className="w-1/4"></div>
      <div className = "flex-col w-1/2 items-center">
        <section className= "flex h-1/8 justify-center"> <h1 className="justify-center">Welcome to my personal site!</h1></section>

        {/* <image></image> */}
        <h1 className="flex h-4/8 justify-center"> PUT IMAGE HERE </h1>

        {/* TODO: TURN THIS INTO TEXT COMPONENT*/}
        <section className="flex h-3/8 justify-center">
          <h1>Hi! My Name is Greg. Nice to meet you!</h1>
        </section>
      </div>

      {/* Side Popup */}
      <div className="flex w-1/4 items-center">
        {(isPopup? <h1 className="">lol</h1>
        :
        <span className="flex justify-center"> press (START) or click here for more about me</span>)}
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
