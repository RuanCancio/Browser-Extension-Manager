'use client'

import { useState, useEffect } from "react";

import Image from "next/image"

export default function Header() {

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) document.documentElement.classList.add('dark'); else document.documentElement.classList.remove('dark');
    }, [isDark])

    return (
        <header className="flex justify-between p-4 bg-white dark:bg-gray-700 rounded-2xl shadow md:w-[718px] w-[350px] m-auto xl:w-[1084px] " >
            {isDark ? (<Image src="/images/logo-dark.svg" alt="" width={179} height={41} />) : (<Image src="/images/logo.svg" alt="" width={179} height={41} />)}

            <button className="bg-gray-300 p-3 rounded-xl cursor-pointer dark:bg-gray-600" onClick={() => setIsDark(!isDark)} >
                {
                    isDark ? (<Image src="/images/icon-sun.svg" alt="Icon theme switcher" width={22} height={22} />) : (<Image src="/images/icon-moon.svg" alt="Icon theme switcher" width={22} height={22} />)
                }
            </button>
        </header>
    )
}