import Link from "next/link";
import { useRouter } from "next/router";

type PokeInfoNavProps = {
}

export function PokeInfoNav({ }: PokeInfoNavProps) {
    const router = useRouter()
    const { name: routeName } = router.query
    return (
        <div className="flex">
            <Link href={`/${routeName}/`} className="bg-dark-gray flex justify-center items-center text-3xl font-bold text-black rounded-lg">
                INFORMATION
            </Link>
            <Link href={`/${routeName}/base-stats`} className="bg-dark-gray flex justify-center items-center text-3xl font-bold text-black rounded-lg">
                BASE STATS
            </Link>
            <Link href={`/${routeName}/moves`} className="bg-dark-gray flex justify-center items-center text-3xl font-bold text-black rounded-lg">
                MOVES
            </Link>
            <Link href={`/${routeName}/evolutions`} className="bg-dark-gray flex justify-center items-center text-3xl font-bold text-black rounded-lg">
                EVOLUTION CHART
            </Link>

        </div>
    )
}