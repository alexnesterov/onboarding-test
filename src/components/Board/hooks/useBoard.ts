import { useEffect, useState } from 'react'
import localforage from 'localforage'
import { IBoardCard } from '@/components/Board/types'

export const useBoard = (name: string, cards: IBoardCard[]) => {
  const [isBoardCompleted, setIsBoardCompleted] = useState<boolean | null>(null)
  const [activeCard, setActiveCard] = useState<number>(0)
  const card = cards[activeCard]

  const handleNextClick = () => {
    const nextCard = activeCard + 1

    if (nextCard >= cards.length) {
      handleCloseClick()
      return
    }

    setActiveCard(nextCard)
  }

  const handleCloseClick = async () => {
    try {
      await localforage.setItem(`${name}Completed`, true)
      setIsBoardCompleted(true)
    } catch (error) {
      console.error('Не удалось сохранить статус:', error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const isCompleted = await localforage.getItem<boolean>(`${name}Completed`)
      setIsBoardCompleted(isCompleted || false)
    }

    fetchData()
  }, [])

  return {
    card,
    isBoardCompleted,
    activeCard,
    handleNextClick,
    handleCloseClick,
  }
}
