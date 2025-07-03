'use client'

import clsx from 'clsx';

import { useEffect, useState , ReactNode} from "react";

import {Text, TextBox, backgroundMap, TextBoxProps} from "./components";

import { useRouter } from 'next/navigation';


type navBarProps = {
    background:string
}

type buttonProps = {
    route: string
    children: ReactNode;
}

export const Button = ({route, children}:buttonProps) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(route);
    }

    return (
        <button
        onClick = {handleClick}
        className='pl-4'
        >

        </button>
    )
}

export const NavBar = ({background}: navBarProps) => {
    return (
        <div className='flex w-9/10 h-8/10 justify-end items-center pr-2'>
                    <section className= {clsx(
                        backgroundMap[background] ?? '',
                        "flex",
                        "w-62/100",
                        "h-7/10",
                        "justify-center",
                        "items-center",
                        "rounded-sm",
                        "ring-2",
                        "ring-black/75"
                    )}>
                        <div className= "grid grid-cols-[10%_90%] gap-2 bg-white w-92/100 h-95/100 rounded-sm inset-ring-2 inset-ring-whitesd">
                            <div className='col-start-1 col-end-2 w-1/4 pt-10'>
                            <h1 className=''>arr</h1>
                            </div>
                            <div className='col-start-2 flex flex-col pt-10'>
                                {["EXPERIENCE", "ME", "PROJECTS", "CONTACT", "RESUME", "EXIT"].map((label) => (
                                    <span className='pl-2 flex items-center'>
                                {/* // <Button route = {`/${label.toLowerCase()}`}> */}
                            <Text text={label} size="3xl" align="center"/>
                            {/* // </Button> */}
                            </span>
                                ))}

                            </div>
                        </div>
                    </section>
                    </div>
    )
}
