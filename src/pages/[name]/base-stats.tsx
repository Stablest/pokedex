import { PokeInfoTemplate } from "@/components/molecule/pokeInfoTemplate";
import { Pokedex } from "@/components/organism/pokedex";

export default function baseStats() {
    return (
        <Pokedex>
            <PokeInfoTemplate >
                <div className="flex flex-col text-black font-bold text-2xl">
                    <div>HP ➡️ 39</div>
                    <div>Attack ➡️ 52</div>
                    <div>Special Attack ➡️ 60</div>
                    <div>Defense ➡️ 43</div>
                    <div>Special Defense ➡️ 50</div>
                    <div>Speed ➡️ 65</div>
                </div>
            </PokeInfoTemplate >
        </Pokedex>
    )
}