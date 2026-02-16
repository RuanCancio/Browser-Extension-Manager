import { CardProps } from "@/cardProps"
import Image from "next/image"
import BtnActive from "../BtnActive/BtnActive"

export default function Card({ logo, name, description, isActive }: CardProps) {
    return (
        <div className="p-4 dark:bg-gray-800 rounded-xl flex flex-col gap-y-4 bg-white border border-blue-200 dark:border-gray-600 w-[350px] h-[200px] self-center ">
            <div className="flex gap-x-4 max-w-87.5 grow" >
                <Image src={logo} alt="Extension logo" width={50} height={50} className="self-start" />
                <div>
                    <h2 className="font-bold dark:text-white">{name}</h2>
                    <p className="dark:text-gray-400" >{description}</p>
                </div>
            </div>
            <div className="flex justify-between">
                <button className="py-1 px-3 border cursor-pointer hover:text-white dark:text-gray-400 rounded-4xl dark:hover:text-black hover:bg-red-400 dark:hover:bg-red-400">Remove</button>
                <BtnActive name={name} />
            </div>
        </div>
    )
}