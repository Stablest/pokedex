import Link from "next/link"
import { ReactNode } from "react"
import { PokeInfoNav } from "./pokeInfoNav"

type PokeInfoProps = {
    routeName?: string,
    children?: ReactNode,
}

export function PokeInfoTemplate({ children, routeName }: PokeInfoProps) {
    return (
        <div className='bg-white h-full w-full rounded-3xl'>
            <div className="h-[10%]">
                <PokeInfoNav></PokeInfoNav>
            </div>
            <div className="h-[90%]">
                {children}
            </div>
        </div>

    )
}