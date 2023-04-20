import { ReactNode, useState } from "react"
import Link from "next/link"
import { SearchBar } from "../molecule/searchBar"
import { useRouter } from "next/router"

type PokedexProps = {
    children?: ReactNode
    handleRouterButton?(): void,
}

export function Pokedex({ children, handleRouterButton }: PokedexProps) {
    const router = useRouter()
    const { name: routeName } = router.query

    return (
        <main className='bg-page-background h-screen flex justify-center items-center'>
            <div className="bg-red w-[70%] h-[70%] rounded-3xl flex flex-col justify-between gap-y-4 p-8">
                <div className="h-[16%] bg-black p-2 rounded-3xl flex gap-x-2">
                    <SearchBar></SearchBar>
                    {routeName && <Link href={'/'} className="bg-button rounded-2xl w-48 h-full text-3xl font-bold text-dark-white flex justify-center items-center">
                        ⬅️ Back
                    </Link>}
                </div>

                <div className="h-[76%] rounded-3xl bg-black p-4">
                    {children}
                </div>
            </div>
        </main>
    )
}


