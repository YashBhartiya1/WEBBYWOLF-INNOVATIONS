'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const Hero = () => {
    const containerRef = useRef(null)
    const headingRef = useRef(null)
    const paraRef = useRef(null)
    const formRef = useRef(null)
    const imageRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headingRef.current, {
                y: -50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.2
            })

            gsap.from(paraRef.current, {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.5
            })

            gsap.from(formRef.current, {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.8
            })

            gsap.from(imageRef.current, {
                scale: 0.9,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
                delay: 1
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={containerRef}
            id='hero'
            className='flex flex-col lg:flex-row justify-center items-center lg:items-center h-auto lg:h-[100vh] px-8 md:px-12 py-8 gap-8 text-center md:text-start w-[100dvw]'
        >
            {/* Left Section */}
            <div className='w-full lg:w-1/2 flex flex-col justify-center gap-4'>
                <h1 ref={headingRef} className='text-3xl sm:text-4xl text-[#222222] font-bold leading-tight'>
                    Lorem ipsum dolor <br /> sit amet
                </h1>
                <p ref={paraRef} className='text-base sm:text-lg leading-6 text-[#000000] font-normal'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eligendi commodi nam. Libero est saepe quam hic sequi enim doloremque magni amet numquam repudiandae laborum, nesciunt tempore adipisci quas quos.
                </p>

                <div ref={formRef} className='flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-start'>
                    <input
                        type="text"
                        placeholder="Enter something"
                        className='border border-gray-300 rounded-sm px-3 py-2 w-full sm:w-auto shadow-md'
                    />
                    <button className='bg-[#0546D2] px-4 py-2 text-white rounded-sm shadow-md'>
                        Submit
                    </button>
                </div>

                <p className='text-sm text-gray-600 mt-2'>No credit card required</p>
            </div>

            {/* Right Section */}
            <div className='w-full lg:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[36rem] relative'>
                <div ref={imageRef} className="w-full h-full shadow-xl rounded-md overflow-hidden">
                    <Image
                        src="/Graphic-Right.png"
                        alt="Graphic"
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
