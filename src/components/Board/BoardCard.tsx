import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePopper } from 'react-popper'
import { CloseIcon } from '@/components/icons/CloseIcon'

type BoardCardProps = {
  heading?: string
  text?: string
  buttonText?: string
  children?: React.ReactNode
}

export const BoardCard = ({
  heading,
  text,
  buttonText,
  children,
}: BoardCardProps) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )

  const referenceElementRef = useRef<HTMLDivElement>(null)
  const popperElementRef = useRef<HTMLDivElement>(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 12],
        },
      },
    ],
  })

  useEffect(() => {
    setReferenceElement(referenceElementRef.current)
    setPopperElement(popperElementRef.current)
  }, [])

  return (
    <>
      <div className="relative">
        <div ref={referenceElementRef}>{children}</div>
        <div
          className="absolute -bottom-1 -left-1 -right-1 -top-1"
          style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0 0 0 5000px' }}
        />
      </div>
      {createPortal(
        <div
          ref={popperElementRef}
          style={styles.popper}
          {...attributes.popper}
          className="absolute w-[315px] rounded bg-white p-5"
        >
          <div className="absolute right-5 top-5">
            <button type="button">
              <CloseIcon />
            </button>
          </div>
          <div className="text-lg font-bold">{heading}</div>
          <div className="mt-3 text-sm">{text}</div>
          <div className="mt-4 flex justify-between text-sm">
            <button className="font-bold underline">{buttonText}</button>
            <div className="text-darkGray">1/2</div>
          </div>
        </div>,
        document.getElementById('board') as HTMLElement
      )}
    </>
  )
}
