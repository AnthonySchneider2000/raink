"use client"

import List from '@/components/List'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { MdBrightness3 as DarkMode, MdBrightnessHigh as LightMode} from 'react-icons/md'



export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const items = [
    {
      name: 'Item 1',
      id: "1",
    },
    {
      name: 'Item 2',
      id: "2",
    },
    {
      name: 'Item 3',
      id: "3",
    },
  ]
  
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    console.log(document)
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    document.documentElement.classList.add('dark')
    setIsDarkMode(true)
  }, [])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        onClick={toggleDarkMode}
        className="absolute top-0 right-0 m-4"
      >
        {isDarkMode ? <LightMode size="2rem" /> : <DarkMode size="2rem" />}
      </div>
      <List items={items} />
    </main>
  )
}
