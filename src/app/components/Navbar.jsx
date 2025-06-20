import React from 'react'

const Navbar = () => {
    return (
        <div id='navbar' className='flex justify-between py-4 px-8 md:px-12'>
            <h1 className='bg-[#DBDBDB] px-6 py-1 font-bold uppercase'>Logo</h1>
            <div className='gap-4 text-[#0546D2] font-semibold hidden lg:flex'>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
            </div>
            <button className='bg-[#ffffff] text-[#000000] px-6 py-1 font-bold'>Sign In</button>
        </div>
    )
}

export default Navbar
