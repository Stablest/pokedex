
import { Inter } from 'next/font/google'

import { Pokedex } from '@/components/organism/pokedex'
import { useState } from 'react'
import { PokeList } from '@/components/molecule/pokeList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <Pokedex>
      <PokeList></PokeList>
    </Pokedex>
  )
}
