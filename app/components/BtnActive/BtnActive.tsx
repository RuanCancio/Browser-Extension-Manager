"use client"
import { useState, useEffect} from "react"
import { useList } from "@/context/ListContext"

export default function BtnActive({ name }: { name: string }) {

    const { list, setList } = useList()
    const filtered = list.filter(current => current.name === name)[0]
    filtered.isActive = !filtered.isActive

    const BtnToggle = (title: string) => {
        let filterState = list.filter(current => current.name === title)[0].isActive
        let thisElement = list.filter(current => current.name === title)[0]
        let listCopy = [...list]
        thisElement.isActive = !filterState
        setList(listCopy)
    }

    return (
        <div onClick={() => {
            BtnToggle(name)
        }} className={`bg-gray-300 dark:bg-gray-500 cursor-pointer rounded-4xl w-12.5 h-7 px-0.5 py-2 flex items-center  ${filtered.isActive ? "justify-end bg-red-400 dark:bg-red-400" : "justify-start"}`}>
            <button className="bg-white cursor-pointer rounded-full w-6 h-6"></button>
        </div>
    )
}