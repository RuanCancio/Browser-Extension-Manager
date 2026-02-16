'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { CardProps } from '@/cardProps'

type ListContextType = {
    list: CardProps[],
    setList: React.Dispatch<React.SetStateAction<CardProps[]>>;
}

type ProviderProps = {
    children: ReactNode;
}

const ListContext = createContext<ListContextType | undefined>(undefined);

export const ListProvider = ({children}: ProviderProps) => {
    const [list, setList] = useState<CardProps[]>([])

    return (
        <ListContext.Provider value ={{list, setList}}>
            {children}
        </ListContext.Provider>
    )
}

export const useList = () => {
    const context = useContext(ListContext)
    if (!context) {
        throw new Error('uselist deve ser usado dentro de ListProvider!')
    }

    return context;
}