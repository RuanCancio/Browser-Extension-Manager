"use client"

import { useEffect } from "react"
import { useFilter } from "@/context/FilterContext"

export default function ExtensionsFilter() {

    const {filters, setFilters} = useFilter()
    useEffect(() => {
        setFilters(prev=>({showActive:false, showInactive: false, showAll: true}))
    }, [])

    return (
        <div className="flex m-auto w-[350px] md:w-[718px] flex-col gap-5 lg:flex-row xl:justify-between md:flex-row md:justify-between xl:w-[1084px] ">
            <h1 className="text-black text-4xl text-center font-bold dark:text-amber-50">Extensions List</h1>
            <div className=" flex gap-5 justify-center text-2xl text-center font-bold text-black dark:text-white h-[44px]">
                <button onClick={() =>{
                    setFilters(prev =>({showActive:false, showInactive:false , showAll: true}))
                }} className={`
                    px-4 
                    py-1 
                    cursor-pointer
                    rounded-4xl 
                    border-2
                    hover:border-red-400 
                    border-gray-500
                    dark:bg-gray-500/40
                    dark:hover:border-red-400 
                    ease-in ${filters.showAll? "bg-red-400 dark:bg-red-400 dark:text-black" : "bg-white"}`}>All</button>

                <button onClick={() => {
                    setFilters(prev=>({showActive:true, showInactive:false , showAll: false}))
                }} className={`
                    px-4 
                    py-1 
                    cursor-pointer
                    rounded-4xl 
                    border-2 
                    hover:border-red-400 
                    hover:border-2 
                    border-gray-500 
                    dark:bg-gray-500/40 
                    dark:hover:border-2 
                    dark:hover:border-red-400 
                    ease-in ${filters.showActive ? "bg-red-400 dark:bg-red-400 dark:text-black" : "bg-white"}`}>Active</button>

                <button onClick={() => {
                    setFilters(prev=>({showActive:false, showInactive:true , showAll: false}))
                }} className={`
                    px-4 
                    py-1 
                    cursor-pointer
                    rounded-4xl
                    border-2
                    hover:border-red-400 
                    border-gray-500 
                    dark:bg-gray-500/40 
                    dark:hover:border-2 
                    dark:hover:border-red-400 
                    ease-in  ${filters.showInactive ? "bg-red-400 dark:bg-red-400 dark:text-black" : "bg-white"}`}>Inactive</button>
            </div>
        </div>
    )

}