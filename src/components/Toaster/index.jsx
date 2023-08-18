import React from 'react'

export const Toaster = () => {
    return (
        <div
            class="shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] text-black flex items-center border-l-4 border-green-500  w-[246px] max-w-sm px-4 py-4 rounded"
            role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 shrink-0 fill-green-500 inline mr-2" viewBox="0 0 512 512">
                <ellipse cx="256" cy="256" data-original="#000" rx="256" ry="255.832" />
                <path class="fill-white"
                    d="m235.472 392.08-121.04-94.296 34.416-44.168 74.328 57.904 122.672-177.016 46.032 31.888z"
                    data-original="#000" />
            </svg>
            <span class="block sm:inline text-sm font-semibold">Update successfully</span>
        </div>
    )
}


