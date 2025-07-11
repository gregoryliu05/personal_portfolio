'use client'

import { useEffect, useState } from "react"

import { Header, TextBox, Text } from "@/components/components"
import clsx from "clsx"

import rectangle from "./../../Rectangle.png"
import blacksqr from "./../../Blacksqr.png"
import redsqr from "./../../Redsqr.png"
import redarrow from "./../../redarrow.png"
import leftArrow from "./../../leftArrow.png"
import rightArrow from "./../../arrow.png"
import { useRouter } from 'next/navigation'
import Link from "next/link"


import Image, { StaticImageData } from "next/image"


export type profileTextProps = {
    title: string
    text: string

}

const text = [
    "I am a detail-oriented software engineer who loves to solve problems and strives to make a positive impact on the world!",
    "This fall, I’ll be joining Procurify as a Software Engineering Intern, where I’ll be working on their spend management system and gaining hands-on experience in building scalable, impactful tools.",
    "Outside of work and school, you can usually find me hooping, working out, catching an NBA game, exploring new food spots around Vancouver, or playing Pokémon ROM hacks in my downtime!"
]

const info = [
    {title1: "Name",
        text1: "Greg Liu",
        title2: "",
        text2: "Software Engineer",
        title3: "School",
        text3: "CS + BUSINESS at UBC",
        title4: "Grad",
        text4: "2027"

    },
    {
     title1: "I'm located in...",
        text1: "Richmond, BC",
        title2: "Currently working on...",
        text2: "A crypto arbitrage trading bot 🤖",
        title3: "NBA Team",
        text3: "LA Clippers",
        title4: "Fav Candy",
        text4: "Icebreakers"
    },
    {title1: "Favourite Hobby",
        text1: "Playing Basketball 🏀",
        title2: "Current favourite artist",
        text2: "Frank Ocean or Jay Chou",
        title3: "My go-to food spot",
        text3: "Grandma Liu Hot Pot 🥡",
        title4: "Currently playing",
        text4: "Pokemon Radical Red"
    }
]

export const ProfileText = ({ title, text} : profileTextProps) => {
    return (
        <div className="flex flex-row h-[20%] w-full mx-auto border-b-2 border-b-[#3e3e3e]">
                        <div className="flex flex-row w-1/2 h-full items-center gap-2 ml-2">
                            <Image  src = {rectangle} alt = "lol" className="h-30/100 w-3/100 text-left flex items-center" width={2} height={3}></Image>
                            <h1 className="h-full w-8/10 text-left flex items-center font-emerald drop-shadow-[0_2px_4px_rgb(0_0_0_/_0.25)] text-black text-3xl">
                            {title}
                            </h1>
                            </div>


                        <div className="flex flex-row w-1/2 h-full items-center mr-2">
                        <h1 className = "flex w-full h-full justify-end items-center font-emerald drop-shadow-[0_2px_4px_rgb(0_0_0_/_0.25)] text-black text-3xl">
                            {text}
                        </h1>
                        </div>

                    </div>
    )
}


export default function MePage() {
    const [index, setIndex] = useState(0)
    const[textIndex, setTextIndex] = useState(0)
    const router = useRouter();

    useEffect(() => {
        const handleKey = (e:KeyboardEvent) => {
            if (e.key === "d" || e.key ==="D") {
                if (textIndex < 2) {
                    setTextIndex(textIndex + 1)
                }
                else if (textIndex == 2) {
                    setTextIndex(0)
                }
            }
            if (e.key === "s" || e.key === "S") {
                router.push("/")
            }

        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey);

    },[textIndex])

    useEffect(() => {
        const handleKey = (e:KeyboardEvent) => {
            if (e.key === "ArrowRight") {
                setIndex(((index + 1) % info.length))
            }
            else if (e.key === "ArrowLeft") {
                setIndex(((index - 1 + info.length) % info.length))
            }
        }

        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey);
    }, [index])



return (
  <main className="relative h-dvh bg-[#fffdfa]">
    <Header />

    {/* TOP PART */}
    <div className="mt-5 flex flex-row w-9/10 h-5/10 mx-auto">
      {/* LEFT SIDE TEXT & TITLE */}
      <div className="flex flex-col h-full w-6/10">
        <h1 className="flex text-4xl justify-center drop-shadow-[0_2px_4px_rgb(0_0_0_/_0.25)]">
          A BIT MORE ABOUT ME...
        </h1>

        {/* Square indicators + Arrow buttons */}
        <div className="flex flex-row w-full h-[7%] items-center justify-center gap-2 relative">
          {/* Left Arrow */}
          <button
            onClick={() =>
              setIndex((prev) => (prev === 0 ? info.length - 1 : prev - 1))
            }
            className="absolute left-0"
          >
            <Image src={leftArrow} alt="Left" width={20} height={20} />
          </button>

          {/* Square Indicators */}
          <Image
            src={index == 0 ? redsqr : blacksqr}
            alt="1"
            width={index == 0 ? 10 : 7}
            height={index == 0 ? 10 : 7}
            className="cursor-pointer"
            onClick={() => setIndex(0)}
          />
          <Image
            src={index == 1 ? redsqr : blacksqr}
            alt="2"
            width={index == 1 ? 10 : 7}
            height={index == 1 ? 10 : 7}
            className="cursor-pointer"
            onClick={() => setIndex(1)}
          />
          <Image
            src={index == 2 ? redsqr : blacksqr}
            alt="3"
            width={index == 2 ? 10 : 7}
            height={index == 2 ? 10 : 7}
            className="cursor-pointer"
            onClick={() => setIndex(2)}
          />

          {/* Right Arrow */}
          <button
            onClick={() => setIndex((prev) => (prev + 1) % info.length)}
            className="absolute right-0"
          >
            <Image src={rightArrow} alt="Right" width={20} height={20} />
          </button>
        </div>

        {/* Text Fields */}
        <ProfileText title={info[index].title1} text={info[index].text1} />
        <ProfileText title={info[index].title2} text={info[index].text2} />
        <ProfileText title={info[index].title3} text={info[index].text3} />
        <ProfileText title={info[index].title4} text={info[index].text4} />
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex h-full w-4/10">image</div>
    </div>

    {/* BOTTOM TEXT */}
    <div className="flex w-9/10 h-22/100 mx-auto mt-4 relative">
      <div className="flex w-full h-full items-start justify-start">
        <section
          className={clsx(
            "bg-[#766d95]",
            "ring-black/75",
            "flex",
            "h-[95%]",
            "w-full",
            "justify-center",
            "items-center",
            "rounded-sm",
            "ring-1"
          )}
        >
          <section className="relative flex flex-row bg-white w-[97%] h-[90%] rounded-sm">
            <span className="pl-3 pt-2 w-full h-[95%]">
              <Text text={text[textIndex]} size="4xl" align="left" />
            </span>
            <button onClick = {() => {
                if (textIndex < 2) {
                    setTextIndex(textIndex + 1)
                }
                else if (textIndex == 2) {
                    setTextIndex(0)
                }
            }}>
              <Image
                src={redarrow}
                alt="arrow"
                height={30}
                width={30}
                className="absolute bottom-4 right-4"
              />
              </button>

          </section>
        </section>
      </div>


    </div>
    {/* Exit Button (Bottom Right) */}
      <Link href="/" className="absolute bottom-4 right-4">
            <h1 className='text-shadow-[0_2px_4px_rgb(0_0_0_/_0.25)]
            text-pokemon text-3xl'>
                EXIT
                </h1>
      </Link>
  </main>



)}
