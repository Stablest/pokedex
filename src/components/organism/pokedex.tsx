import { ReactNode } from "react"
import { Header } from "../molecule/header"
import { PokeList } from "../molecule/pokeList"

type PokedexProps = {
    children?: ReactNode
}

export function Pokedex({ children }: PokedexProps) {
    return (
        <div className="bg-red w-full">
            <Header>No001 Pokemon 1</Header>
            <PokeList>Teste</PokeList>
        </div>
    )
}