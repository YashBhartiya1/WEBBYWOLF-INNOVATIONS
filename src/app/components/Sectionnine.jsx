import React from 'react'

const Sectionnine = () => {
  return (
    <div className="bg-[#F1F1F1] py-10 px-4">
      {/* Top Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
        {/* Left Text */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-start">
          <h2 className="text-[#1959AC] font-bold text-[32px] lg:text-[42px] leading-[100%] tracking-[-2%] uppercase">
            Lorem ipsum dolor sit amet consectetur. Dignissim tellus.
          </h2>
          <p className="text-[#000000] text-[16px] lg:text-[18px] leading-[25px]">
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
            blandit laoreet urna sapien quam pulvinar. Dolor aliquet est tortor
            tincidunt ultricies feugiat mauris. Aliquam platea turpis porta
            nisl felis. Massa in facilisis semper libero eget eu quisque
            bibendum platea. Tortor fames.
          </p>
          <button className="bg-[#1959AC] text-white px-4 py-2 rounded-sm w-fit">
            Lorem ipsum <span>→</span>
          </button>

          {/* Left-aligned Image Card */}
          <div className="bg-white shadow-lg rounded-md p-4 w-full max-w-md">
            <img src="/snine1.png" alt="Card" className="w-full h-auto" />
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 ">
          <img src="/snine.png" alt="Main" className="w-full h-auto" />
        </div>
      </div>
    </div>
  )
}

export default Sectionnine
