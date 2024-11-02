"use client";

import React, { useState } from 'react';


const HeaderLayout = () => {

    const [switchMobileMenu, setSwitchMobileMenu] = useState<boolean>(false)

    return (
        <header className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
            <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
                <a href="#"><img src="./images/Sugimoto-logo.webp" alt="logo" className='w-36' /></a>

                <div className={`${switchMobileMenu ? "" : "max-lg:hidden"} lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}>
                    <button onClick={() => setSwitchMobileMenu(false)} className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </button>

                    <ul
                        className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                        <li className='mb-6 hidden max-lg:block'>
                            <a href="#"><img src="./images/Sugimoto-logo.webp" alt="logo" className='w-36' />
                            </a>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                            <a href='#'
                                className='hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>Home</a>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='#'
                            className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Products</a>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='#'
                            className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Feature</a>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='#'
                            className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Blog</a>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='#'
                            className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>About</a>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='#'
                            className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Contact</a>
                        </li>
                    </ul>
                </div>

                <div className='flex max-lg:ml-auto space-x-3'>

                    <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-2 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-800 font-medium max-lg:hidden">Wishlist</span>
                    </div>


                    <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-2 hover:bg-gray-100">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">3</span>
                        </div>
                        <span className="text-sm text-gray-800 font-medium max-lg:hidden">Cart</span>
                    </div>

                    <div onClick={() => setSwitchMobileMenu(true)} className="ml-2 cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 text-gray-800 hover:bg-gray-100">
                        <span className="text-sm font-medium">Sign in</span>
                    </div>

                    <button onClick={() => setSwitchMobileMenu(true)} className='lg:hidden'>
                        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>

    )
}

export default HeaderLayout