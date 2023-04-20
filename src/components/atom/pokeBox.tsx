import Image from "next/image"
import Link from "next/link"
import { TypeLabel } from "./typeLabel"


type PokeBoxProps = {
    children: string,
}

export function PokeBox({ children }: PokeBoxProps) {
    function handleButtonClick() {

    }

    return (
        <Link href={'charmander'} className="min-w-[178px] min-h-[178px] flex flex-col items-center bg-cloudy-white overflow-clip rounded-xl " onClick={handleButtonClick}>
            <div className="w-full h-4 flex justify-between items-center pt-2">
                <span className="text-black text-xl font-semibold">#004</span>

                <TypeLabel type="fire">Fire</TypeLabel>
                <TypeLabel type="water">Water</TypeLabel>

            </div>
            <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' width={128} height={128} alt='pokemon image' unoptimized></Image>
            <span className=" text-black text-2xl font-semibold">
                {children}
            </span>

        </Link>
    )
}