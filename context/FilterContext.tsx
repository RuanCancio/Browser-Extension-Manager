'use client'

import { useContext, createContext } from "react";
import { useState } from "react";

type Filters = {
    showActive: boolean,
    showInactive: boolean,
    showAll: boolean
}

type FilterContextType = {
    filters: Filters,
    setFilters: React.Dispatch<React.SetStateAction<Filters>>
}

type ProviderProps = {
    children: React.ReactNode
}

export const FilterContext = createContext<FilterContextType | null> (null)

export const FilterProvider = ({children}: ProviderProps) => {
    const [filters, setFilters] = useState<Filters>({
        showActive: false,
        showInactive: false,
        showAll: false
    })

    return (
        <FilterContext.Provider value={{filters, setFilters}}> {children} </FilterContext.Provider>
    )
}

export function useFilter() {
    const context = useContext(FilterContext)
    if (!context) {
        throw new Error("useFilter válido somente dentro do filterProvider")
    }
    return context
}