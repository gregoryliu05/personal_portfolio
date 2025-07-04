'use client'

import clsx from 'clsx';

import { useEffect, useState , ReactNode, use} from "react";

import {Text, TextBox, backgroundMap, TextBoxProps} from "./components";

import Link from 'next/link';
import { useRouter } from 'next/navigation';


type navBarProps = {
    background:string
    isPopup: boolean
    setIsPopup: (isPopup: boolean) => void
}

const navBarItems = [
    {text: "EXPERIENCE", type: "link", route: "/experience"},
    {text: "ME", type: "link", route: "/me"},
    {text: "PROJECTS", type: "link", route: "/projects"},
    {text: "RESUME", type: "link", route: "/resume"},
    {text: "CONTACT", type: "link", route: "contact"},
    {text: "EXIT", type: "button", route: "/"},

]


export const NavBar = ({background, isPopup, setIsPopup}: navBarProps) => {
    const [selectId, setSelectId] = useState(0)
    const router = useRouter();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown") {
                setSelectId((selectId + 1) % navBarItems.length)
                console.log(selectId)
            } else if (e.key === "ArrowUp") {
                setSelectId((selectId - 1 + navBarItems.length) % navBarItems.length)
                console.log(selectId)
            } else if (e.key === "d") {
                if (selectId === 5){
                    setIsPopup(false)
                }
                else {
                    router.push(navBarItems[selectId].route)
                }

            } else if (e.key === "s") {
                setIsPopup(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectId, router])

    return (
        <div className='flex w-9/10 h-8/10 justify-end items-center pr-2'>
                    <section className= {clsx(
                        backgroundMap[background] ?? '',
                        "flex",
                        "w-60/100",
                        "h-7/10",
                        "justify-center",
                        "items-center",
                        "rounded-sm",
                        "ring-2",
                        "ring-black/75"
                    )}>

                        {/* TODO: put the arrow thing inside the map, if i select smth show it, change this from a grid
                        to just a flex thing */}
                        <div className= "flex-row gap-2 bg-white w-92/100 h-95/100 rounded-sm inset-ring-2 inset-ring-whitesd">
                            <div className='pl-4 flex flex-col pt-10'>
                                {navBarItems.map((item, index) =>{
                                    switch(item.type) {
                                        case "link":
                                            return <div key = {index} className='flex col'>
                                                {index == selectId? <h1 className='w-1/20'>t</h1> : <h1 className='pl-2'></h1>}
                                                <Link  href = {`/${item.text.toLowerCase()}`} className='pl-1'>
                                            <Text text= {item.text} size="3xl" align="center"/>
                                            </Link>
                                            </div>
                                        case "button":
                                            return <div key = {index} className='flex col'>
                                                 {index == selectId? <h1 className='w-1/20'>t</h1> : <h1 className='pl-2'></h1>}
                                                    <button key = {index} onClick = {() => {
                                                    (setIsPopup(false))
                                                    }}
                                                    className='flex items-center pl-1'>
                                                    <Text text= "EXIT" size="3xl" align="center"/>
                                                    </button>
                                                    </div>
                                }})}
                            </div>
                        </div>
                    </section>
                    </div>
    )
}
