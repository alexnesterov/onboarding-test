import { BoardCard } from './BoardCard'
import { useBoard } from './hooks/useBoard'
import { IBoardCard } from '@/components/Board/types'

type BoardProps = {
  name: string
  cards: IBoardCard[]
}

export const Board = ({ name, cards }: BoardProps) => {
  const {
    card,
    isBoardCompleted,
    activeCard,
    handleNextClick,
    handleCloseClick,
  } = useBoard(name, cards)

  if (isBoardCompleted || isBoardCompleted === null) return null

  return (
    <BoardCard
      key={card.selector}
      selector={card.selector}
      title={card.title}
      text={card.text}
      buttonText={card.buttonText}
      currentCardIndex={activeCard}
      totalCards={cards.length}
      onNextButtonClick={handleNextClick}
      onCloseButtonClick={handleCloseClick}
    />
  )
}
