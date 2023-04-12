
import { Inter } from 'next/font/google'

import { Pokedex } from '@/components/organism/pokedex'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-red h-screen'>
      <Pokedex></Pokedex>
    </main>
  )
}
