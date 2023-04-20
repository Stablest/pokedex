import { useEffect, useRef, useState } from "react"
import { PokeBox } from "../atom/pokeBox"

type PokeListProps = {
    children?: string,
}

export function PokeList({ children }: PokeListProps) {
    const [pokeNames, setPokeNames] = useState<string[]>([])

    useEffect(() => {
        const array: string[] = []
        for (let i = 0; i < 58; i++)
            array.push('Charmander')
        setPokeNames(array)
    }, [])

    return (
        <div className="grid grid-cols-[repeat(auto-fit,178px)] justify-evenly gap-x-2 gap-y-4 h-full [&::-webkit-scrollbar]:hidden overflow-y-scroll">
            {pokeNames?.map((name, index) => <PokeBox key={index}>{name}</PokeBox>)}
        </div>
    )
}