'use client'

import React, { useRef, useEffect } from 'react'
import { FaArrowRight } from "react-icons/fa"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SectionFive = () => {
  const sectionRef = useRef(null)
  const imagesRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      imagesRef.current.forEach((img, idx) => {
        gsap.from(img, {
          opacity: 0,
          y: idx % 2 === 0 ? 80 : -80, // alternate up/down
          x: idx % 3 === 0 ? -60 : 60, // slight side movement
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 100%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#F1F5F9] py-12 px-6 mt-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col justify-around">
          {/* Row 1: Text and Vertical Image Side-by-Side */}
          <div className="flex gap-6">
            {/* Text block */}
            <div className="flex-1 flex flex-col gap-4 justify-start">
              <p className="text-[#475569] font-medium text-lg tracking-widest uppercase">No Limits</p>
              <h2 className="text-[#0F172A] font-bold text-4xl uppercase leading-tight">
                Lorem ipsum dolor sit amet
              </h2>
              <p className="text-[#000000] text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
              </p>
              <button className="bg-[#1959AC] text-white px-4 py-2 rounded flex items-center gap-2 w-fit">
                Lorem Ipsum <FaArrowRight />
              </button>
            </div>

            {/* Vertical Image */}
            <div className="w-[150px] flex-shrink-0 mt-52">
              <img
                ref={el => imagesRef.current[0] = el}
                src="/sfiveleft1.png"
                alt="Vertical Side Image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Row 2: Bottom Two Side-by-Side Images */}
          <div className="flex gap-4">
            <img
              ref={el => imagesRef.current[1] = el}
              src="/sfiveleft2.png"
              alt="Bottom Left"
              className="w-1/2 h-40 object-cover"
            />
            <img
              ref={el => imagesRef.current[2] = el}
              src="/sfiveleft3.png"
              alt="Bottom Right"
              className="w-1/2 h-40 object-cover"
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="flex gap-4">
            <img
              ref={el => imagesRef.current[3] = el}
              src="/sfiveright1.png"
              alt="Top Right 1"
              className="w-1/2 object-cover"
            />
            <img
              ref={el => imagesRef.current[4] = el}
              src="/sfiveright2.png"
              alt="Top Right 2"
              className="w-1/2 object-cover"
            />
          </div>
          <div>
            <img
              ref={el => imagesRef.current[5] = el}
              src="/sfiveright3.png"
              alt="Middle Right"
              className="w-full object-cover"
            />
          </div>
          <div className="flex gap-4">
            <img
              ref={el => imagesRef.current[6] = el}
              src="/sfiveright4.png"
              alt="Bottom Right 1"
              className="w-1/2 object-cover"
            />
            <img
              ref={el => imagesRef.current[7] = el}
              src="/sfiveright5.png"
              alt="Bottom Right 2"
              className="w-1/2 object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default SectionFive
