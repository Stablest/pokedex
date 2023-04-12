import { TypeLabel } from "../atom/typeLabel"

type PokeInfoHeaderProps = {
    children: string
}

export function PokeInfoHeader({ children }: PokeInfoHeaderProps) {
    return (
        <div className="flex justify-between items-center w-full h-24 bg-dark-brown">
            <span className=" text-2xl font-medium">
                {children}
            </span>
            <TypeLabel bgColor="bg-blue-water">
                Water
            </TypeLabel>
        </div>
    )
}