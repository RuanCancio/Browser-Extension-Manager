import data from "@/data/data.json"
import Card from "./Card";
import { CardProps } from "@/cardProps";
import { useFilter } from "@/context/FilterContext";
import { useEffect, useState } from "react";
import { useList } from "@/context/ListContext";

export default function CardContainer() {
    const { filters } = useFilter()
    const { list, setList } = useList()

    useEffect(() => {
        setList(data)
    }, [data, setList])

    useEffect(() => {
        let filteredCards: CardProps[] = data
        if (filters.showActive) filteredCards = data.filter(current => current.isActive === true);
        if (filters.showInactive) filteredCards = data.filter(current => current.isActive === false);
        if (filters.showAll) filteredCards = [...data]
        setList(filteredCards)
    }, [filters, data])

    return (
        <section className="
        flex 
        flex-col 
        gap-y-4
        w-max
        m-auto
        md:grid 
        xl:grid-cols-3 
        md:gap-4 
        md:grid-cols-2
        md:justify-end
        md:place-items-center
        " >
            {
                list.map(element =>
                    <Card logo={element.logo}
                        name={element.name}
                        description={element.description}
                        isActive={element.isActive}
                        key={Math.random()}
                    />
                )
            }
        </section>
    )
}