import { useState, useEffect, FC } from 'react'
import { DEFAULT_INTERVAL } from './config'

export type AnimatedComponentProps = {
  text: string
  interval?: number
  className?: string
  style?: React.CSSProperties
  delay?: number
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

const createAnimatedComponent = <T extends keyof JSX.IntrinsicElements>(
  Tag: T): FC<AnimatedComponentProps> => {
    return ({ text, interval: _interval = DEFAULT_INTERVAL, delay = 0, ...props }: AnimatedComponentProps) => {
      const [displayedIndex, setDisplayedIndex] = useState(0)
      const TAG = Tag as any
      useEffect(() => {
        let interval = 0
        setTimeout(() => {
          setInterval(() => {
            setDisplayedIndex((prev) => {
              if (prev === text.length) {
                clearInterval(interval)
                return prev
              }
              return prev + 1
            })
          }, _interval)
        }, delay)
        return () => clearInterval(interval)
      }, [text])

      return <TAG {...props as any}>{text.slice(0, displayedIndex)}</TAG>
    }
}

export const AnimatedText = {
  h1: createAnimatedComponent('h1'),
  h2: createAnimatedComponent('h2'),
  p: createAnimatedComponent('p'),
}
