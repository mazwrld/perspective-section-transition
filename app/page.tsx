'use client'

import hero from '@/assets/bg_1.jpeg'
import content from '@/assets/bg_2.jpeg'
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import Lenis from 'lenis'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

interface Props {
  scrollYProgress: MotionValue<number>
}

function Hero({ scrollYProgress }: Props) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])

  return (
    <motion.div
      style={{ scale, rotate }}
      className='sticky top-0 h-screen rounded bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]'
    >
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
    </motion.div>
  )
}

function Content({ scrollYProgress }: Props) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0])
  return (
    <motion.div style={{ scale, rotate }} className='relative rounded h-screen'>
      <Image
        src={content}
        alt='content image'
        placeholder='blur'
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      />
    </motion.div>
  )
}

export default function Home() {
  const container = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <main ref={container} className='relative h-[200vh]'>
      <Hero scrollYProgress={scrollYProgress} />
      <Content scrollYProgress={scrollYProgress} />
    </main>
  )
}
