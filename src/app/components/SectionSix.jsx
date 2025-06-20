'use client'

import React, { useRef, useEffect } from 'react'
import { FaArrowRight } from "react-icons/fa"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SectionSix = () => {
    const sectionRef = useRef(null)
    const imageRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate image from left
            gsap.from(imageRef.current, {
                x: -80,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    once: true,
                },
            })

            // Animate content from right
            gsap.from(textRef.current, {
                x: 80,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    once: true,
                },
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={sectionRef} className="w-full bg-white py-8 px-4 lg:px-16">
            <div className="flex flex-col lg:flex-row items-end justify-between gap-8">

                {/* Left: Image */}
                <div ref={imageRef} className="w-full lg:w-1/2">
                    <img
                        src="/sectionsix.png"
                        alt="Motorcyclists"
                        className="w-full h-auto object-cover rounded"
                    />
                </div>

                {/* Right: Content */}
                <div ref={textRef} className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-start">
                    <p className="text-[#0546D2] text-sm font-medium mb-2">Lorem ipsum</p>

                    <h2 className="text-[#0F172A] text-2xl sm:text-3xl font-bold leading-tight mb-4 uppercase">
                        <span className='text-[#0546D2]'>Lorem</span> ipsum dolor sit <br /> amet consectetur. Enim donec.
                    </h2>

                    <p className="text-gray-600 text-sm mb-6">
                        Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
                    </p>

                    {/* 2 Column List */}
                    <div className="grid grid-cols-2 gap-y-2 text-sm text-black mb-6">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>

                    {/* CTA Button */}
                    <button className="bg-[#1959AC] text-white px-4 py-2 text-sm rounded flex items-center mx-auto lg:mx-0 gap-2 w-fit ">
                        Lorem Ipsum <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SectionSix
