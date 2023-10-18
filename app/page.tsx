import Image from 'next/image'
import List from '@/components/List'




export default function Home() {
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


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <List items={items} />
    </main>
  )
}
