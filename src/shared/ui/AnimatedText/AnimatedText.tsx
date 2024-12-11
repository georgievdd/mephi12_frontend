import { useState, useEffect, FC } from 'react'
import { DEFAULT_SPEED } from './config'

export type AnimatedComponentProps = {
  text: string
  speed?: number
  className?: string
  style?: React.CSSProperties
  delay?: number
}

const createAnimatedComponent = <T extends keyof JSX.IntrinsicElements>(
  Tag: T): FC<AnimatedComponentProps> => {
    return ({ text, speed = DEFAULT_SPEED, delay = 0, ...props }: AnimatedComponentProps) => {
      const [displayedIndex, setDisplayedIndex] = useState(0)

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
          }, speed)
        }, delay)
        return () => clearInterval(interval)
      }, [text])

      return <Tag {...props as any}>{text.slice(0, displayedIndex)}</Tag>
    }
}

export const AnimatedText = {
  h1: createAnimatedComponent('h1'),
  h2: createAnimatedComponent('h2'),
  p: createAnimatedComponent('p'),
}
