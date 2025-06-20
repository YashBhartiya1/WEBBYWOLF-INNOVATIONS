'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SectionTwo = () => {
    const sectionRef = useRef(null)
    const headingRef = useRef(null)
    const subheadingRef = useRef(null)
    const paraRef = useRef(null)
    const listRef = useRef([])
    const imageRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    once: true,
                    // markers: true // Uncomment to debug scroll position
                }
            })

            tl.from(headingRef.current, {
                y: -20,
                opacity: 0,
                duration: 1,
                ease: 'power2.out'
            })
            .from(subheadingRef.current, {
                y: -20,
                opacity: 0,
                duration: 1.2,
                ease: 'power2.out'
            }, '-=0.4')
            .from(paraRef.current, {
                y: 20,
                opacity: 0,
                duration: 1.3,
                ease: 'power2.out'
            }, '-=0.4')
            .from(listRef.current, {
                y: 20,
                opacity: 0,
                duration: 1.4,
                ease: 'power2.out',
                stagger: 0.2
            }, '-=0.5')
            .from(imageRef.current, {
                scale: 0.95,
                opacity: 0,
                duration: 1.5,
                ease: 'power2.out'
            }, '-=1')
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={sectionRef}
            className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 mt-10 px-8 md:px-12'
        >
            {/* Left Text Section */}
            <div className='w-full lg:w-[55%] text-center md:text-start'>
                <h2
                    ref={headingRef}
                    className='text-[#0546D2] font-medium text-xl sm:text-2xl leading-[100%]'
                >
                    Lorem ipsum dolor sit amet
                </h2>
                <h2
                    ref={subheadingRef}
                    className='text-[#222222] font-bold text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] tracking-tight leading-tight mt-2 uppercase'
                >
                    Lorem ipsum dolor sit amet consectetur. Eu <br className='hidden md:block' /> elit
                </h2>
                <p
                    ref={paraRef}
                    className='text-[#000000] text-base sm:text-lg leading-[25px] font-normal mt-4'
                >
                    Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus.
                    Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare.
                </p>

                {/* Info Boxes */}
                <div className='flex flex-col gap-6 mt-6'>
                    {[1, 2, 3].map((item, idx) => (
                        <div
                            key={idx}
                            className='flex gap-4 items-start'
                            ref={el => listRef.current[idx] = el}
                        >
                            <img
                                src="/Sure-Drive-Assist-final-logo-01 3.png"
                                alt="icon"
                                width={30}
                                height={30}
                                className='object-contain'
                            />
                            <div>
                                <p className='font-medium text-lg sm:text-xl text-[#222222]'>
                                    Lorem ipsum dolor sit amet consectetur Volutpat hac morbi
                                </p>
                                <p className='font-normal text-sm sm:text-base leading-[25px] text-[#000000]'>
                                    Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis
                                    senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec.
                                    Ipsum sit ut tortor.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Image Section */}
            <div className='w-full lg:w-[45%]'>
                <div ref={imageRef}>
                    <img
                        src="/sectiontwo_right.png"
                        alt="Section Two"
                        className='w-full h-auto object-contain rounded-md shadow-xl'
                    />
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
