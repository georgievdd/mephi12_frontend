import { InlineMath } from 'react-katex'
import './styles.css'
import { Backpack as IBackpack, Light } from '../types'

const Num: React.FC<{num: string, light?: Light}> = ({light, num}) => {
  if (!light) {
    return <p className='num'>{num}</p>
  }
  const { left, len, color } = light
  const l = num.slice(0, left)
  const mid = num.slice(left, left + len)
  const r = num.slice(left + len)
  return (
    <>
      <p className='num'>{l}</p>
      <p className='num' style={{color: color}}>{mid}</p>
      <p className='num'>{r}</p>
    </>
  )
}

export const Backpack: React.FC<IBackpack> = ({
  numbers,
  literal,
  light,
}) => {
  return (
    <div className='light_backpack'>
      {numbers.map((num, index) => (
        <div>
          <InlineMath math={`${literal}_${index} = `} />
          <Num light={light} num={num} />
        </div>
      ))}
    </div>
  )
}
