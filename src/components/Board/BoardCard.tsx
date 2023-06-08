import { createPortal } from 'react-dom'
import { CloseIcon } from '@/components/icons/CloseIcon'
import { useBoardCard } from './hooks/useBoardCard'
import { IBoardCard } from '@/components/Board/types'

type BoardCardProps = IBoardCard & {
  currentCardIndex: number
  totalCards: number
  onCloseButtonClick: () => void
  onNextButtonClick: () => void
}

export const BoardCard = ({
  selector,
  title,
  text,
  buttonText,
  currentCardIndex,
  totalCards,
  onCloseButtonClick,
  onNextButtonClick,
}: BoardCardProps) => {
  const { anchor, refs, floatingStyles } = useBoardCard(selector)

  if (!anchor) return null

  return createPortal(
    <div
      className="absolute w-[315px] rounded bg-white p-5"
      ref={refs.setFloating}
      style={floatingStyles}
    >
      <div className="absolute right-5 top-5">
        <button type="button" onClick={onCloseButtonClick}>
          <CloseIcon />
        </button>
      </div>
      <div className="text-lg font-bold">{title}</div>
      <div className="mt-3 text-sm">{text}</div>
      <div className="mt-4 flex justify-between text-sm">
        <button className="font-bold underline" onClick={onNextButtonClick}>
          {buttonText}
        </button>
        <div className="text-darkGray">
          {currentCardIndex + 1}/{totalCards}
        </div>
      </div>
    </div>,
    document.getElementById('board') as HTMLElement
  )
}
