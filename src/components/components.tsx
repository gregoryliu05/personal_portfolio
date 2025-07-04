'use client'

import clsx from 'clsx';

import { useEffect, useState } from "react";

export type TextProps = {
  text: string;
  size: string;
  align?: string;
};

const sizeMap: Record<string, string> = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  // Add more as needed
};

const alignMap:  Record<string,string> = {
  center: "justify-center",
  left: "justify-start",
  right: "justify-end"
}

export const backgroundMap: Record<string,string> = {
    green: "bg-[#05D3C3]",
    purple: "bg-[#766d95]"
}

export type TextBoxProps = {
    text: string;
    background: string;
}

export const Text = ({text, size, align}: TextProps) => {
  return <span className={clsx(
        sizeMap[size] ?? '',
        'font-emerald',
        'text-shadow-[0_2px_4px_rgb(0_0_0_/_0.25)]',
        'text-pokemon',
        align? alignMap[align]: ""
      )}>
    {text}
  </span>
}

export const Header = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

   useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])


  return (
    <header className = "flex justify-center">
        <div className="flex w-1/2 justify-start pl-3">
          <Text size = "2xl" text = 'Greg Liu'/>
          </div>
        <div className="flex w-1/2 justify-end pr-3">
          <Text size = "2xl" text = {time}/>
          </div>
      </header>
  )

}

export const TextBox = ({text, background}: TextBoxProps) => {
    return (<div className='flex w-9/10 h-full justify-center items-start'>
            <section className= {clsx(
                backgroundMap[background] ?? '',
                "flex",
                "w-8/10",
                "h-1/3",
                "justify-center",
                "items-center",
                "rounded-sm",
                "ring-2",
                "ring-greensd"
            )}>
                <section className= "flex bg-white w-97/100 h-9/10 rounded-sm inset-ring-2 inset-ring-whitesd">
                    <span className='pl-3 pt-2'>
                    <Text text = {text} size = "2xl" align = "left"/>
                    </span>
                    <h1>
                    </h1>
                </section>
            </section>
            </div>
    )
}

