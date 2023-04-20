import { PokeInfoTemplate } from "@/components/molecule/pokeInfoTemplate"
import { Pokedex } from "@/components/organism/pokedex"

export default function Moves() {

    return (
        <Pokedex>
            <PokeInfoTemplate >
                <div className=" font-medium text-2xl text-black py-1 px-4 flex flex-col justify-center">
                    <div className="flex justify-between items-center text-3xl font-bold">
                        <div className='bg-dark-red rounded-2xl w-full px-4 h-12 flex items-center' >
                            <span>Learnt by level up</span>
                        </div>
                        <img src="/options.svg" alt="options icon" />
                    </div>
                    <table className='px-8 bg-page-background'>
                        <thead>
                            <tr className="text-left">
                                <th className="">Level</th>
                                <th className="">Move</th>
                                <th className="">Type</th>
                                <th className="">Category</th>
                                <th className="">Accuracy</th>
                                <th className="">Power</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="">
                                <td className="">1</td>
                                <td className="">Growl</td>
                                <td className="">Normal</td>
                                <td className="">Status</td>
                                <td className="">100</td>
                                <td className="">*</td>
                            </tr>
                            <tr className="">
                                <td className="">1</td>
                                <td className="">Scratch</td>
                                <td className="">Normal</td>
                                <td className="">Physical</td>
                                <td className="">100</td>
                                <td className="">40</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </PokeInfoTemplate >
        </Pokedex>
    )
}