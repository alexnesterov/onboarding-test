import { useEffect, useState } from 'react'

export const Board = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  useEffect(() => {
    setActiveCard(1)
  }, [])

  return <div>{activeCard} Board</div>
}
