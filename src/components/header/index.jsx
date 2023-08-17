import React from 'react'

const Header = () => {
    return (
        <header className='shadow-md py-4  sm:px-10 bg-white font-sans min-h-[70px] w-full'>
            <div className='flex flex-wrap items-center justify-between relative'>
                <div className='flex lg:order-1 max-sm:ml-auto'>
                    <div className="absolute right-10 flex items-center max-sm:hidden">
                        <div className="inline-block border-gray-300 border-l-2 ml-4 pl-4 cursor-pointer">
                            <div class="relative">
                                <img src="https://readymadeui.com/profile_4.jpg" class="w-12 h-12 rounded-full" />
                                <span class="h-3 w-3 rounded-full border border-white bg-green-500 block absolute bottom-1 right-0"></span>
                            </div>
                        </div>
                        <div class="relative ml-[18px] ">
                            <h2 className='text-[#333] text-sm'>Nidhi Sharma</h2>
                            <p className='text-[#999] text-xs'>Super Admin</p>
                        </div>
                    </div>
                </div>
                <div className='flex lg:space-x-3 max-lg:space-y-2 max-lg:block max-lg:w-full max-lg:mt-6'>
                </div>
            </div>
        </header >
    )
}

export default Header
