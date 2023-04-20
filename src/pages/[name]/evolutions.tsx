import { PokeInfoTemplate } from "@/components/molecule/pokeInfoTemplate";
import { Pokedex } from "@/components/organism/pokedex";
import Link from "next/link";

export default function Evolutions() {
    return (
        <Pokedex>
            <PokeInfoTemplate >
                <div className="h-full flex justify-center items-center text-black">
                    <Link href={'/'}>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="charmander" width={254} />
                    </Link>
                    <div className="flex flex-col">
                        ------+
                        <span>Level 16</span>
                    </div>
                    <Link href={'/'}>
                        <img src="https://img.pokemondb.net/sprites/black-white/normal/charmeleon.png" alt="charmeleon" width={254} />
                    </Link>
                    <div className="flex flex-col">
                        ------+
                        <span>level 36</span>
                    </div>
                    <Link href={'/'}>
                        <img src="https://img.pokemondb.net/sprites/black-white/normal/charizard.png" alt="charizard" width={254} />
                    </Link>
                </div>
            </PokeInfoTemplate >
        </Pokedex>
    )
}