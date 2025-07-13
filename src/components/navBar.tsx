'use client'

import clsx from 'clsx';
import { useEffect, useState } from "react";
import { Text, TextBox, backgroundMap, TextBoxProps } from "./components";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import arrow from "./../arrow.png"

type navBarProps = {
    background: string
    isPopup: boolean
    setIsPopup: (isPopup: boolean) => void
    setShowContact: (value: boolean) => void
}

const navBarItems = [
    { text: "EXPERIENCE", type: "link", route: "/experience" },
    { text: "ME", type: "link", route: "/me" },
    { text: "PROJECTS", type: "link", route: "/projects" },
    { text: "RESUME", type: "link", route: "/resume" },
    { text: "CONTACT", type: "modal", route: "contact" },
    { text: "EXIT", type: "button", route: "/" },
]

export const NavBar = ({ background, isPopup, setIsPopup, setShowContact }: navBarProps) => {
    const [selectId, setSelectId] = useState(0)
    const router = useRouter();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key.toLowerCase()
            if (e.key === "ArrowDown") {
                setSelectId((selectId + 1) % navBarItems.length)
            } else if (e.key === "ArrowUp") {
                setSelectId((selectId - 1 + navBarItems.length) % navBarItems.length)
            } else if (key === "d") {
                const selectedItem = navBarItems[selectId];
                if (selectedItem.type === "button") {
                    setIsPopup(false);
                } else if (selectedItem.type === "modal") {
                    setShowContact(true);
                    setIsPopup(false);
                } else {
                    router.push(selectedItem.route);
                }
            } else if (key === "s") {
                setIsPopup(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectId, router])

    return (
        <div className='flex w-9/10 h-8/10 justify-end items-center pr-2'>
            <section className={clsx(
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

                <div className="flex-row gap-2 bg-white w-92/100 h-95/100 rounded-sm inset-ring-2 inset-ring-whitesd">
                    <div className='pl-4 flex flex-col pt-10'>
                        {navBarItems.map((item, index) => {
                            const isSelected = index === selectId;
                            return (
                                <div key={index} className='flex col items-center'>
                                    {isSelected ? (
                                        <Image className='flex w-2/20 h-1/20 justify-center' src={arrow} alt="arrow" width={20} height={20} />
                                    ) : (
                                        <h1 className='pl-2'></h1>
                                    )}
                                    {item.type === "button" ? (
                                        <button onClick={() => setIsPopup(false)} className='flex items-center pl-1'>
                                            <Text text={item.text} size="3xl" align="center" />
                                        </button>
                                    ) : item.type === "modal" ? (
                                        <button onClick={() => {
                                            setShowContact(true);
                                            setIsPopup(false);
                                        }} className='flex items-center pl-1'>
                                            <Text text={item.text} size="3xl" align="center" />
                                        </button>
                                    ) : (
                                        <Link href={item.route} className='pl-1 flex'>
                                            <Text text={item.text} size="3xl" align="center" />
                                        </Link>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
