'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const footerRef = useRef(null)
  const columnsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(columnsRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
          once: true,
        },
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  const footerColumns = [
    {
      title: 'Lorem Ipsum',
      items: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
    },
    {
      title: 'Lorem Ipsum',
      items: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
    },
    {
      title: 'Lorem Ipsum',
      items: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
    },
    {
      title: 'Lorem Ipsum',
      items: ['Lorem Ipsum'],
    },
  ]

  return (
    <footer
      ref={footerRef}
      className="bg-[#0F1D35] w-full py-20 text-white mt-10"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start gap-y-10">
          
          {/* Logo - elevated slightly */}
          <div className="pt-2 lg:pt-4 min-w-[100px] lg:mr-28">
            <div className="bg-white text-black font-bold px-4 py-2 text-base leading-tight">
              LOGO
            </div>
          </div>

          {/* Columns - centered content */}
          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-10 justify-center">
              {footerColumns.map((col, idx) => (
                <div
                  key={idx}
                  ref={(el) => (columnsRef.current[idx] = el)}
                  className="flex flex-col gap-3 items-start"
                >
                  <h3 className="font-semibold text-sm md:text-base mb-1">
                    {col.title}
                  </h3>
                  <ul className="text-xs md:text-sm space-y-2 opacity-90">
                    {col.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
