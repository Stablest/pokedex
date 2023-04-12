import { useEffect, useRef, useState } from "react"
import { PokeBox } from "../atom/pokeBox"

type PokeListProps = {
    children?: string,
}

export function PokeList({ children }: PokeListProps) {
    const [pokeNames, setPokeNames] = useState<string[]>([])

    useEffect(() => {
        const array: string[] = []
        for (let i = 0; i < 60; i++)
            array.push('Charmander')
        setPokeNames(array)
    }, [])

    return (
        <div className=" w-[96%] my-8 mx-auto py-8  grid grid-cols-[repeat(auto-fit,148px)] justify-center overflow-clip gap-8 bg-dark-brown">
            {pokeNames?.map((name, index) => <PokeBox key={index}>{name}</PokeBox>)}
        </div>
    )
}