import Image from "next/image"

type PokeBoxProps = {
    children: string,
}

export function PokeBox({ children }: PokeBoxProps) {
    return (
        <button className="min-w-[148px] min-h-[148px] flex flex-col items-center bg-cloudy-white overflow-clip">
            <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' width={124} height={124} alt='pokemon image' unoptimized></Image>
            <span>
                {children}
            </span>
        </button>
    )
}