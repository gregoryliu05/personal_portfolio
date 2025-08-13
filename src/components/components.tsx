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
  '5xl': 'text-5xl'
  // Add more as needed
};

const justifyMap: Record<string,string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end'
}

export const hMap: Record<string, string> = {
  "h-1/3": "h-1/3",
  "95": "h-[95%]"

  // Add more as needed
};

export const wMap: Record<string, string> = {
  "w-8/10": "w-8/10",
  "67": "w-[67%]",
  '100': 'w-[100%]',
  '60': 'w-[60%]'

  // Add more as needed
};


const alignMap:  Record<string,string> = {
  center: "justify-center",
  left: "justify-start",
  right: "justify-end"
}

export const backgroundMap: Record<string,string> = {
    green: "bg-[#05D3C3] ring-greensd",
    purple: "bg-[#766d95] ring-black/75"
}

export type TextBoxProps = {
    text: string;
    background: string;
    height: string;
    width: string;
    size: string;
    justify: string
}

export const Text = ({text, size, align}: TextProps) => {
  return <span className={clsx(
        sizeMap[size] ?? '',
        'font-emerald text-pokemon drop-shadow-[0_2px_4px_rgb(0_0_0_/_0.25)]',
         'block whitespace-normal break-words',
        'text-[20px]',
        sizeMap[size] ? `md:${sizeMap[size]}`: '',
        sizeMap[size] ? `lg:${sizeMap[size]}`: '',
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

export const TextBox = ({text, background, height, width, size, justify}: TextBoxProps) => {
    return (<div className={clsx("flex", "w-full", "h-full",  "items-start", justifyMap[justify] ?? '')}>
            <section className= {clsx(
                backgroundMap[background] ?? '',
                "flex",
                hMap[height] ?? '',
                wMap[width] ?? '',
                'justify-center',
                "items-center",
                "rounded-sm",
                "ring-1",

            )}>
                <section className= "flex bg-white w-97/100 h-9/10 rounded-sm inset-ring-2 inset-ring-whitesd">
                    <span className='pl-3 pt-2'>
                    <Text text = {text} size = {size} align = "left"/>
                    </span>
                    <h1>
                    </h1>
                </section>
            </section>
            </div>
    )
}

