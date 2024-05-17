'use client'

import hero from '@/assets/bg_1.jpeg'
import content from '@/assets/bg_2.jpeg'
import gsap from 'gsap'
import { ReactLenis } from 'lenis/react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

function Hero() {
  return (
    <div className='h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]'>
      <p>Scroll Perspective</p>
      <div className='flex gap-4'>
        <section>Section</section>
        <div className='relative w-[12.5vw]'>
          <Image
            src={hero}
            alt='hero image'
            placeholder='blur'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
        <p>Transition</p>
      </div>
    </div>
  )
}

function Content() {
  return (
    <div className='relative h-screen'>
      <Image
        src={content}
        alt='content image'
        placeholder='blur'
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      />
    </div>
  )
}

export default function Home() {
  const lenisRef = useRef<{ lenis?: any }>(null)
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
    }
  })
  return (
    <ReactLenis ref={lenisRef} autoRaf={false}>
      <Hero />
      <Content />
    </ReactLenis>
  )
}
