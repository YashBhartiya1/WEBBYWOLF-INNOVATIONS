'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Mockup = () => {
    const sectionRef = useRef(null)
    const leftRef = useRef(null)
    const rightRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Left section animation (from left)
            gsap.from(leftRef.current, {
                x: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    once: true,
                },
            })

            // Right section animation (from right)
            gsap.from(rightRef.current, {
                x: 100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    once: true,
                },
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={sectionRef}
            className='bg-[#F3F3F3] flex flex-col md:flex-row items-center justify-center py-4'
        >
            <div
                ref={leftRef}
                className='w-full lg:w-[70%] flex flex-col gap-4 ps-8 text-center md:text-start'
            >
                <h3 className='text-[#0546D2] font-semibold text-2xl leading-[100%] tracking-[-2%]'>Lorem Ipsum</h3>
                <h2 className='text-[#000000] font-bold text-[42px] leading-[100%] tracking-[-2%] capitalize'>
                    Lorem ipsum dolor <br /> sit amet
                </h2>
                <p className='text-[#000000] font-normal text-[18px] leading-[25px] tracking-normal'>
                    Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.
                </p>
                <div className='flex gap-4 justify-center md:justify-start'>
                    <img src="\mockup1.png" alt="error" />
                    <img src="\mockup2.png" alt="error" />
                </div>
            </div>

            <div ref={rightRef}>
                <img src="\Background.png" alt="error" />
            </div>
        </div>
    )
}

export default Mockup
