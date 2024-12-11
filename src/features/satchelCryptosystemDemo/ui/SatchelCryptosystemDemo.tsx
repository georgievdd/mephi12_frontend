import { InlineMath } from 'react-katex'
import { Backpack } from './Backpack'
import { satchelCryptosystem } from '../models/mocks'

const { hardBackpack, lightBackpack, R, S, T } = satchelCryptosystem

const renderLatexMatrix = (matrix: number[][]) => {
  return (
    "\\begin{pmatrix}\n" +
    matrix
      .map((row, index) => {
        if (index === matrix.length) return row.join(" & ") + "\n"
        else return row.join(" & ") + "\\\\\n"
      })
      .join("") +
    "\\end{pmatrix}"
  )
}

export const SatchelCryptosystemDemo = () => {
  return (
    <div>
      <h3>R = {R}</h3>
      <h3>S = {S}</h3>
      <h3>T = {T}</h3>
      <h3>(S, T) = ({S}, {T})</h3>
      <Backpack {...lightBackpack}/>
      <Backpack {...hardBackpack}/>
      <p>________________________________________</p>
      <h3>Сообщение</h3>
      <h3>M = (1, 0, 0, 1, 1)</h3>
      <InlineMath math="C = M * b = M_0 * b_0 + M_1 * b_1 + M_2 * b_2 + M_3 * b_3 + M_4 * b_4 + + M_5 * b_5 = 0987 + 2010 + 0656 = 3653" />
      <h3>C = 3653</h3>
      <InlineMath math="C * S mod T = 3653 * 59 = 215527 = 325 mod 2418" />
      <h3>M = 25</h3>
    </div>
  )
}
