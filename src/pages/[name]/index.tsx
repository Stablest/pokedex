import { TypeLabel } from "@/components/atom/typeLabel"
import { PokeInfoTemplate } from "@/components/molecule/pokeInfoTemplate"
import { Pokedex } from "@/components/organism/pokedex"

export default function PokemonName() {
    return (
        <Pokedex >
            <PokeInfoTemplate>
                <div className=" text-black font-medium flex justify-between items-center h-full p-6 text-xl">
                    <div className="flex flex-col items-center min-w-max">
                        <div className="bg-fire-red rounded-xl h-8 w-40 flex items-center justify-center">
                            <span className="font-bold text-2xl">Charmander</span>
                        </div>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="pokemon img" width='254px' />
                    </div>
                    <div className=" flex flex-col justify-evenly h-full">
                        <div className=" bg-fire-red h-32 w-96 flex justify-center items-center rounded-xl border-black border-2">
                            <span className="w-[90%] font-medium text-2xl">It is said that Charmander's fire burns hotter if it has experienced harsh battles</span>
                        </div>
                        <span className="text-xl">
                            Abilities:
                            <ul className='list-disc pl-12'>
                                <li>Blaze</li>
                                <li>Solar Power (hidden ability)</li>
                            </ul>
                        </span>
                    </div>
                    <div className="h-full flex flex-col justify-evenly">
                        <div className="flex">
                            <span>Type : </span>
                            <TypeLabel type="fire">Fire</TypeLabel>
                            <TypeLabel type="water">Water</TypeLabel>
                        </div>
                        <div> Height: 1.70m (5'07")</div>
                        <div>Weight: 90.5 Kg (199.5 lbs)</div>
                        <div>
                            Gender: ♂️ 87.5% ♀️ 12.5%
                        </div>
                        <div>
                            Species: Lizard Pokemon
                        </div>
                    </div>
                </div>
            </PokeInfoTemplate>
        </Pokedex>
    )
}