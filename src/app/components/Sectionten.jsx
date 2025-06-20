import React from 'react'

const Sectionten = () => {
    return (
        <div className="w-full flex flex-col gap-12 px-4 py-12 md:px-20">
            {/* Heading Section */}
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-[#0F172A] font-bold text-[28px] sm:text-[36px] md:text-[42px] leading-tight uppercase">
                    Lorem Ipsum Dolor Sit Amet
                </h2>
                <p className="text-[#0F172A] text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[24px] mt-4">
                    Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.
                </p>
            </div>

            {/* Image Section */}
            <div className="relative flex flex-col md:flex-row items-center md:items-start w-full">
                {/* Left Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="/sten.png"
                        alt="Main Image"
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Right Overlapping Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-6 md:mt-0 md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2 md:translate-x-[-50px]">
                    <img
                        src="/sten1.png"
                        alt="Overlay Image"
                        className="w-full max-w-[400px] h-auto object-cover shadow-xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default Sectionten
