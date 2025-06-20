'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SectionFour = () => {
    const sectionRef = useRef(null)
    const headingRef = useRef(null)
    const paragraphRef = useRef(null)
    const cardRefs = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 40%',
                    once: true,
                    // markers:true
                },
            })

            tl.from(headingRef.current, {
                y: -20,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out'
            })
            .from(paragraphRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.4')
            .from(cardRefs.current, {
                y: 30,
                opacity: 0,
                duration: 2,
                stagger: 0.2,
                ease: 'power2.out'
            }, '-=0.4')
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={sectionRef} className='px-8 md:px-12'>
            {/* Heading */}
            <div className='w-full sm:w-[60%] flex flex-col gap-4 mt-12'>
                <h3
                    ref={headingRef}
                    className='text-[#0546D2] text-xl sm:text-2xl font-semibold tracking-[-4%] leading-[100%]'
                >
                    Lorem ipsum dolor sit amet
                </h3>
                <h2 className='text-[#222222] font-bold text-2xl sm:text-[42px] leading-[100%] tracking-[-2%] uppercase'>
                    LOREM IPSUM dolor sit
                </h2>
                <p
                    ref={paragraphRef}
                    className='text-[#000000] font-normal text-base sm:text-[18px] leading-[25px]'
                >
                    Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
                </p>
            </div>

            {/* Cards */}
            <div className='flex flex-wrap gap-6 sm:gap-16 items-center justify-center mt-12'>
                {[
                    "/Frame 20.png",
                    "/Frame 20 (1).png",
                    "/Frame 20 (2).png",
                    "/Frame 20 (3).png",
                ].map((src, idx) => (
                    <div
                        key={idx}
                        ref={el => cardRefs.current[idx] = el}
                        className="w-full sm:max-w-md rounded overflow-hidden shadow-lg"
                    >
                        <img className="w-full" src={src} alt={`Card ${idx}`} />
                        <div className="px-4 py-4">
                            <div className="font-bold text-lg sm:text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                            <button className='text-[#0546D2] mt-4'>Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SectionFour
