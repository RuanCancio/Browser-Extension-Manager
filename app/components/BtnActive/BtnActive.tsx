"use client"

import { useList } from "@/context/ListContext"

export default function BtnActive({
    name
}: {
    name: string
}) {

    const { list, setList } = useList()

    const filtered = list.find(
        current => current.name === name
    )

    const BtnToggle = (title: string) => {

        const newList = list.map(item => {

            if (item.name === title) {
                return {
                    ...item,
                    isActive: !item.isActive
                }
            }

            return item
        })

        setList(newList)
    }

    return (
        <div
            onClick={() => BtnToggle(name)}
            className={`
                bg-gray-300
                dark:bg-gray-500
                cursor-pointer
                rounded-4xl
                w-12.5
                h-7
                px-0.5
                py-2
                flex
                items-center
                ${filtered?.isActive
                    ? "justify-end bg-red-400 dark:bg-red-400"
                    : "justify-start"}
            `}
        >
            <button
                className="bg-white cursor-pointer rounded-full w-6 h-6"
            />
        </div>
    )
}