import { cloneElement, ReactNode } from "react"
import { AnimatedComponentProps } from "./AnimatedText"
import { DEFAULT_SPEED } from "./config"

interface Props {
    children: ReactNode | ReactNode[] 
}

type AnimatedTextItem = ReactNode & {
  props: AnimatedComponentProps
}

const asArray = (children: ReactNode | ReactNode[]): ReactNode[] => {
    if (!Array.isArray(children)) {
        return [children]
    }
    return children as ReactNode[]
}
const isAnimatedTextItem = (item: any) => !!item?.props?.text


export const AnimatedTextScope = ({children}: Props) => {
  const items = asArray(children).filter(isAnimatedTextItem) as AnimatedTextItem[]
  let reducedDelay = 0;
  return (
    items.map((item) => {
      const oldDelay = item.props.delay ?? 0
      const speed = item.props.speed ?? DEFAULT_SPEED
      const { length } = item.props.text
      const newProps = {
        ...item.props,
        delay: oldDelay + reducedDelay,
      }
      reducedDelay += oldDelay + speed * length
      return cloneElement(item as any, newProps)
    })
  )
}
