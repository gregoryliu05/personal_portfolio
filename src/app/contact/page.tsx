'use client'

import Link from 'next/link'
import Image from 'next/image'
import linkedinIcon from './../../linkedin.png' // replace with real paths
import githubIcon from './../../gh.png'
import emailIcon from './../../email.jpg'
import phoneIcon from './../../phone.jpg'

import { Text } from '@/components/components'

export default function ContactPopup() {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="relative bg-[#FFFDFA] w-[400px] h-[450px] border-2 border-black rounded-lg flex flex-col p-6 justify-between font-pokemon">
        <div className="absolute top-2 right-2">
          <Link href="/">
           <Text size = "3xl" text = "CLOSE" ></Text>
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>

        <div className="flex flex-col gap-5">
          <Link href="https://linkedin.com/in/yourprofile" target="_blank" className="flex items-center gap-3">
            <Image src={linkedinIcon} alt="LinkedIn" width={24} height={24} />
            <span className="text-xl">LinkedIn</span>
          </Link>

          <Link href="https://github.com/yourusername" target="_blank" className="flex items-center gap-3">
            <Image src={githubIcon} alt="GitHub" width={24} height={24} />
            <span className="text-xl">GitHub</span>
          </Link>

          <a href="mailto:youremail@example.com" className="flex items-center gap-3">
            <Image src={emailIcon} alt="Email" width={24} height={24} />
            <span className="text-xl">youremail@example.com</span>
          </a>

          <div className="flex items-center gap-3">
            <Image src={phoneIcon} alt="Phone" width={24} height={24} />
            <span className="text-xl">(123) 456-7890</span>
          </div>
        </div>
      </div>
    </div>
  )
}
