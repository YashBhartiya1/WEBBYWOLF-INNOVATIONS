'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Form = () => {
    const sectionRef = useRef(null)
    const fieldRefs = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Step-by-step animation
            gsap.from(fieldRefs.current, {
                opacity: 0,
                y: 30,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 50%',
                    once: true
                }
            })

            // Update all field border colors
            gsap.to('input, select, textarea', {
                borderColor: '#9F9F9F',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                    once: true
                }
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={sectionRef}>
            <h2 className='text-[#222222] font-bold text-[42px] leading-[100%] tracking-[-2%] uppercase text-center mt-10'>
                REQUEST A QUOTE
            </h2>

            <section className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 sm:p-8 border border-gray-200">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name */}
                        <div ref={el => fieldRefs.current[0] = el}>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" placeholder="Your Name" className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        {/* Email */}
                        <div ref={el => fieldRefs.current[1] = el}>
                            <label className="block text-sm font-medium text-gray-700">E-mail</label>
                            <input type="email" placeholder="Your Email" className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        {/* Phone Number */}
                        <div ref={el => fieldRefs.current[2] = el}>
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="text" placeholder="Phone Number" className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        {/* Time Frame */}
                        <div ref={el => fieldRefs.current[3] = el}>
                            <label className="block text-sm font-medium text-gray-700">Time Frame<span className="text-red-500">*</span></label>
                            <input type="text" placeholder="Choose Time Frame" className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>

                        {/* Size */}
                        <div ref={el => fieldRefs.current[4] = el}>
                            <label className="block text-sm font-medium text-gray-700">Size<span className="text-red-500">*</span></label>
                            <select className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                <option>Choose Size</option>
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                            </select>
                        </div>

                        {/* Quantity */}
                        <div ref={el => fieldRefs.current[5] = el}>
                            <label className="block text-sm font-medium text-gray-700">Quantity<span className="text-red-500">*</span></label>
                            <select className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                <option>Choose Quantity</option>
                                <option>10</option>
                                <option>50</option>
                                <option>100</option>
                            </select>
                        </div>

                        {/* Project Description */}
                        <div ref={el => fieldRefs.current[6] = el} className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">Please Describe Your Project<span className="text-red-500">*</span></label>
                            <textarea
                                placeholder="Choose a project type"
                                rows="4"
                                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            ></textarea>
                        </div>

                        {/* Terms and Button */}
                        <div ref={el => fieldRefs.current[7] = el} className="md:col-span-2 text-center mt-4">
                            <p className="text-xs text-gray-600 mb-4">
                                By submitting this form you agree to our <span className="text-blue-600 underline cursor-pointer">Terms of Service</span> and <span className="text-blue-600 underline cursor-pointer">Privacy Policy</span>.
                            </p>
                            <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">
                                Lorem Ipsum →
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Form
