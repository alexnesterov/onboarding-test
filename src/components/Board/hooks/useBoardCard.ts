import { useEffect, useState } from 'react'
import { useFloating, offset, flip, autoUpdate } from '@floating-ui/react-dom'

export const useBoardCard = (selector: string) => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null)

  const { refs, floatingStyles } = useFloating({
    elements: {
      reference: anchor,
    },
    whileElementsMounted: autoUpdate,
    middleware: [offset(12), flip()],
  })

  useEffect(() => {
    const targetElement = document.querySelector<HTMLElement>(selector)

    if (targetElement) {
      targetElement.style.outline = '5000px solid rgba(0, 0, 0, .3)'
      setAnchor(targetElement)
    }

    return () => {
      if (targetElement) {
        targetElement.style.outline = 'none'
      }
    }
  }, [])

  return { anchor, refs, floatingStyles }
}
