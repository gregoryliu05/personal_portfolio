'use client'

import clsx from 'clsx';
import { useEffect, useState } from "react";
import { Text, backgroundMap } from "./components";
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
    { text: "EXPERIENCE", type: "link", route: "/experience" , index: 0},
    { text: "ME", type: "link", route: "/me", index: 1},
    { text: "RESUME", type: "link", route: "/resume", index: 2},
    { text: "PROJECTS", type: "link", route: "/projects", index: 3},
    { text: "CONTACT", type: "modal", route: "contact", index: 4},
    { text: "EXIT", type: "button", route: "/", index: 5},
]

export const NavBar = ({ background, setIsPopup, setShowContact }: navBarProps) => {
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
    }, [router, setIsPopup, setShowContact, selectId])

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
                                <div key={index}
                                    onMouseEnter={() => setSelectId(index)}
                                    onFocus={() => setSelectId(index)}
                                    className='flex col items-center'>
                                    {isSelected ? (
                                        <Image className='flex w-2/20 h-1/20 justify-center' src={arrow} alt="arrow" width={20} height={20} />
                                    ) :
                                    (
                                        <h1 className='pl-1'></h1>
                                    )}

                                     {/* text area that can wrap */}
                                    {item.type === 'button' ? (
                                        <button onClick={() => setIsPopup(false)} className="block text-left grow basis-0 min-w-0">
                                        {/* <Text text={item.text} size="3xl" align="left"/> */}
                                        <span className=
                                        'font-emerald text-pokemon drop-shadow-[0_2px_4px_rgb(0_0_0_/_0.25)] block whitespace-normal break-words text-xl md:text-2xl lg:text-3xl justify-start'>
                                            {item.text}
                                        </span>
                                        </button>
                                    ) : item.type === 'modal' ? (
                                        <button onClick={() => { setShowContact(true); setIsPopup(false); }} className="block text-left grow basis-0 min-w-0">
                                        <span className=
                                        'font-emerald text-pokemon drop-shadow-[0_2px_4px_rgb(0_0_0_/_0.25)] block whitespace-normal break-words text-xl md:text-2xl lg:text-3xl justify-start'>
                                            {item.text}
                                        </span>
                                        </button>
                                    ) : (
                                        <Link href={item.route} className="block text-left grow basis-0 min-w-0">
                                        <span className=
                                        'font-emerald text-pokemon drop-shadow-[0_2px_4px_rgb(0_0_0_/_0.25)] block whitespace-normal break-words text-xl md:text-2xl lg:text-3xl justify-start'>
                                            {item.text}
                                        </span>
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
