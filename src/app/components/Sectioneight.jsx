import React from 'react';

const Sectioneight = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-8 py-16">
      {/* LEFT CONTENT */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start">
        <h2 className="text-[#0F172A] font-bold text-[32px] md:text-[42px] leading-tight mb-6 text-center lg:text-start">
          LOREM IPSUM DOLOR SIT AMET
        </h2>

        {/* Tabs */}
        <div className="flex items-center gap-4 border border-[#CBD5E1] rounded-lg px-2 py-1 w-fit mb-4">
          <button className="px-4 py-2 rounded-md text-[#0F172A] font-medium hover:bg-[#E2E8F0]">Research</button>
          <button className="px-4 py-2 rounded-md text-[#0F172A] font-medium hover:bg-[#E2E8F0]">Plan</button>
          <button className="px-4 py-2 rounded-md text-[#0F172A] font-medium hover:bg-[#E2E8F0]">Design</button>
        </div>

        {/* Paragraph */}
        <p className="text-[#334155] text-[16px] leading-7 mb-4 text-center lg:text-start">
          Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac
          varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in
          accumsan.
        </p>

        {/* Button */}
        <button className="text-[#1D4ED8] font-semibold flex items-center gap-2 hover:underline">
          Check tools <span className="text-xl">→</span>
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="lg:w-1/2 w-full">
        <img
          src="/seight.png"
          alt="Section image"
          className="w-full h-auto rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default Sectioneight;
