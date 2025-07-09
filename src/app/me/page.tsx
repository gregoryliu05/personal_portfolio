'use client'

import { useState } from "react"

import { Header, TextBox } from "@/components/components"

import rectangle from "./../../Rectangle.png"
import blacksqr from "./../../Blacksqr.png"
import redsqr from "./../../Redsqr.png"

import Image, { StaticImageData } from "next/image"


export type profileTextProps = {
    title: string
    text: string

}

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

    return (
    <main className="h-dvh bg-[#fffdfa]">
        <Header/>
        {/* TOP PART */}
        <div className="flex flex-row w-9/10 h-5/10 mx-auto">
                {/* LEFT SIDE TEXT & TITLE */}
                <div className="flex flex-col h-full w-6/10">
                    <h1 className="flex text-4xl justify-center drop-shadow-[0_2px_4px_rgb(0_0_0_/_0.25)]"> ABOUT ME </h1>
                    <div className="flex flex-row w-full h-[7%] items-center justify-center gap-2">
                        <Image src = {index == 0? redsqr : blacksqr} alt = "1" width={index == 0? 10: 7} height={index == 0? 10: 7}></Image>
                        <Image src = {index == 1? redsqr : blacksqr} alt = "1" width={index == 1? 10: 7} height={index == 1? 10: 7}></Image>
                        <Image src = {index == 2? redsqr : blacksqr} alt = "1" width={index == 2? 10: 7} height={index == 2? 10: 7}></Image>
                    </div>

                    {/* Text component here */}
                    <ProfileText title = "Name" text = "Greg Liu"></ProfileText>
                    <ProfileText title = "" text = "Software Engineer"></ProfileText>
                    <ProfileText title = "School" text = "UBC"></ProfileText>
                    <ProfileText title = "Program" text = "CS + Business"></ProfileText>

                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="flex h-full w-4/10">
                image
                </div>

        </div>

        {/* BOTTOM TEXT */}
        <div className="flex w-9/10 h-3/10 mx-auto mt-4">
            <TextBox text = "Iadjsfjas;kdlfj ;lkdja;lksfd" background="purple" height="95" width="100" size = "3xl" justify="left">

            </TextBox>

        </div>

    </main>


)}
