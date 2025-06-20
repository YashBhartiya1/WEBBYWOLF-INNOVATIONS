import React from 'react';
import Image from 'next/image';

const Sectionseven = () => {
  return (
    <div className="bg-[#155ADA] py-16 flex flex-col gap-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 px-8 text-center md:text-start">
        <div className="md:w-[60%]">
          <h3 className="text-white text-2xl font-semibold">Join other Sun harvesters</h3>
          <h2 className="text-white text-[42px] font-bold uppercase mt-2">Lorem ipsum dolor sit amet</h2>
          <p className="text-white mt-4 text-[18px] leading-7">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum
            congue fusce nunc, donec magnis commodo.
          </p>
        </div>
        <div>
          <button className="bg-white text-black text-sm font-bold px-10 py-2 rounded-sm mt-2 ">
            Lorem Ipsum
          </button>
        </div>
      </div>

      <div className='items-center ps-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pe-8 lg:pe-0'>
        <div id='card-1' className='bg-[#ffff] py-12 rounded-lg px-4 '>
          <img src="/usericon.png" alt="error" className='mb-2' />
          <p className='mb-2'>Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.</p>
          <div className='flex items-center gap-4 '>
            <img src="/User Thumb.png" alt="userthumb" />
            <p>Jane Cooper</p>
          </div>
        </div>
        <div id='card-2' className='bg-[#ffff] py-10 rounded-lg px-4' >
          <img src="/usericon1.png" alt="error" className='mb-2' />
          <p className='mb-2'>Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.</p>
          <div className='flex items-center gap-4'>
            <img src="/User Thumb (1).png" alt="userthumb" />
            <p>Jane Cooper</p>
          </div>
        </div>
        <div id='card-3' className='bg-[#ffff] py-10 rounded-lg px-4'>
          <img src="/usericon2.png" alt="error" className='mb-2' />
          <p className='mb-2'>Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.</p>
          <div className='flex items-center gap-4'>
            <img src="/User Thumb (2).png" alt="userthumb" />
            <p>Jane Cooper</p>
          </div>
        </div>
        <div id='card-4' className='bg-[#ffff] py-10 rounded-lg px-4'>
          <img src="/usericon3.png" alt="error" className='mb-2' />
          <p className='mb-2'>Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.</p>
          <div className='flex items-center gap-4'>
            <img src="/User Thumb (3).png" alt="userthumb" />
            <p>Jane Cooper</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionseven;
