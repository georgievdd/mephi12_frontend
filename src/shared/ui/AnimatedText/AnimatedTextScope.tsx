import { cloneElement, ReactNode } from "react"
import { AnimatedComponentProps } from "./AnimatedText"
import { DEFAULT_INTERVAL } from "./config"

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
      const interval = item.props.interval ?? DEFAULT_INTERVAL
      const { length } = item.props.text
      const newProps = {
        ...item.props,
        delay: oldDelay + reducedDelay,
      }
      reducedDelay += oldDelay + interval * length
      return cloneElement(item as any, newProps)
    })
  )
}
