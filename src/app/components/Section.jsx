'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa"
import { MdCall } from "react-icons/md"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Section = () => {
    const sectionRef = useRef(null)
    const headingRef = useRef(null)
    const paraRef = useRef(null)
    const listRef = useRef([])
    const ctaRef = useRef(null)
    const imageRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 40%', // Trigger later
                    once: true,
                    // markers: true 
                }
            })

            tl.from(headingRef.current, {
                y: -30,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })
                .from(paraRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power3.out'
                }, "-=0.5")
                .from(listRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 1.3,
                    ease: 'power3.out',
                    stagger: 0.2
                }, "-=0.6")
                .from(ctaRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 1.4,
                    ease: 'power3.out'
                }, "-=0.6")
                .from(imageRef.current, {
                    scale: 0.95,
                    opacity: 0,
                    duration: 1.5,
                    ease: 'power3.out'
                }, "-=0.8")
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={sectionRef}
            className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-20 px-8 md:px-12 py-8 w-full max-w-[100vw] overflow-x-hidden'
        >
            {/* Left Side */}
            <div className='w-full md:w-1/2'>
                <div className='mb-8 text-center md:text-start' ref={headingRef}>
                    <h2 className='text-[#0546D2] font-semibold text-xl md:text-2xl'>Lorem ipsum dolor sit</h2>
                    <h2 className='text-[#222222] font-bold text-2xl md:text-3xl lg:text-[42px] leading-tight'>
                        Lorem ipsum <br /> dolor sit amet
                    </h2>
                </div>

                <p className='text-[#000000] text-sm md:text-base mt-2 mb-6' ref={paraRef}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum excepturi labore deleniti dolores provident?
                    Exercitationem perferendis, ipsa ab dolore non placeat architecto recusandae doloribus necessitatibus modi
                    quisquam doloremque qui amet.
                </p>

                <div className='flex flex-col gap-4'>
                    {[1, 2, 3].map((item, idx) => (
                        <div
                            key={idx}
                            className='flex items-start gap-4'
                            ref={el => listRef.current[idx] = el}
                        >
                            <img
                                src={`/section_${["first", "second", "third"][idx]}.png`}
                                alt="icon"
                                width={64}
                                height={64}
                                className='min-w-[64px]'
                            />
                            <p className='text-sm text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente sunt dolor ipsum exercitationem libero dolor sit amet consectetur.
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    ref={ctaRef}
                    className='flex flex-col sm:flex-row items-center  gap-3 mt-8 font-semibold'
                >
                    <button className='bg-[#1959AC] text-white px-4 py-2 rounded-sm flex items-center gap-2 shadow-md'>
                        Lorem ipsum
                        <span><FaArrowRight /></span>
                    </button>
                    <p className='text-[#1959AC] flex items-center gap-2'>
                        <MdCall /> 123456789
                    </p>
                </div>
            </div>

            {/* Right Side */}
            <div className='w-full md:w-1/2'>
                <div ref={imageRef} className="w-full h-auto">
                    <img
                        src="/Twowheller.png"
                        alt="error"
                        className='w-full h-auto object-contain shadow-xl rounded-md'
                    />
                </div>
            </div>
        </div>
    )
}

export default Section
