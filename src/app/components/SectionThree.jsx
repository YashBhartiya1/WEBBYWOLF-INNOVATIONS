'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SectionThree = () => {
    const sectionRef = useRef(null)
    const imgRefs = useRef([])

    useEffect(() => {
        gsap.from(imgRefs.current, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                once: true
            }
        })
    }, [])

    return (
        <div ref={sectionRef} className='mt-12'>
            <h2 className='font-bold text-[42px] uppercase leading-[100%] tracking-[-2%] text-center'>
                Lorem ipsum dolor sit amet consectetur. Commodo leo amet.
            </h2>

            <div className='flex flex-col gap-12 mt-12'>
                <div className='flex flex-wrap justify-center items-center gap-20'>
                    <img ref={el => imgRefs.current[0] = el} src="/Hero_MotoCorp.svg 1.png" alt="hero" />
                    <img ref={el => imgRefs.current[1] = el} src="/Honda_Logo.svg 1.png" alt="honda" />
                    <img ref={el => imgRefs.current[2] = el} src="/Bajaj-Auto-Logo 1.png" alt="bajaj" />
                    <img ref={el => imgRefs.current[3] = el} src="/TVS_Motor_Company_Logo 1.png" alt="tvs" />
                </div>

                <div className='flex flex-wrap justify-center items-center gap-20'>
                    <img ref={el => imgRefs.current[4] = el} src="/royal-enfield-logo-2014-present-1024x742 1.png" alt="enfield" />
                    <img ref={el => imgRefs.current[5] = el} src="/648cb22f-e2a3-4861-851a-5f2060bd6dad 1.png" alt="logo" />
                    <img ref={el => imgRefs.current[6] = el} src="/KTM-Logo.svg 1.png" alt="ktm" />
                    <img ref={el => imgRefs.current[7] = el} src="/AtherLogo 1.png" alt="ather" />
                </div>

                <div className='flex flex-wrap justify-center items-center gap-20'>
                    <img ref={el => imgRefs.current[8] = el} src="/Ola-Electric 1.png" alt="ola" />
                    <img ref={el => imgRefs.current[9] = el} src="/new-logo-1 1.png" alt="logo2" />
                    <img ref={el => imgRefs.current[10] = el} src="/Ultraviolette_Logo 1.png" alt="ultraviolette" />
                    <img ref={el => imgRefs.current[11] = el} src="/ANI-20221101121927 1.png" alt="ani" />
                </div>
            </div>
        </div>
    )
}

export default SectionThree
