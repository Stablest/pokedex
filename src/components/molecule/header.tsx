import { RouterButton } from "../atom/routerButton"
import { PokeInfoHeader } from "./pokeInfoHeader"

type HeaderProps = {
    children: string,

}

export function Header({ children }: HeaderProps) {
    return (
        <div className="w-[96%] pt-8 mx-auto flex">
            <PokeInfoHeader>
                No001 Pokemon 1
            </PokeInfoHeader>
            <RouterButton>
                More Info
            </RouterButton>
        </div>
    )
}