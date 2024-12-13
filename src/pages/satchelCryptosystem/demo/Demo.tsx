import { RFC } from '@shared/types/component'
import { UnitHeader } from '@shared/ui/UnitHeader'
import { root } from '../config'
import './styles.scss'
import { useEffect, useRef, useState } from 'react'
import { playIcon } from '@shared/assests'
import { DEFAULT_LIGHT_BACKPACK, LEN, RIGHT } from './config'

const multNums = (R: string, S: string, T: string) => {
  const r = BigInt(R)
  const s = BigInt(S)
  const t = BigInt(T)
  return String(r * s % t)
}

const calculateStep1 = (R: string, S: string, T: string): IResult => {
  const result = multNums(R, S, T)
  const status = result === '1' ? 'success' : 'error'
  return {
    label: `${R} * ${S} == ${result} mod ${T}`,
    status,
  }
}

const mult = (s: string, v: string[]) => {
  let ans = BigInt(0)
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '1') ans += BigInt(v[i])
  }
  return String(ans)
}

const calculateStep2 = (R: string, T: string, lightBackPack: string[]) => {
  const r = BigInt(R)
  const t = BigInt(T)
  return lightBackPack.map(BigInt).map((v) => v * r % t).map(String)
}

const calculateStep4 = (M: string, MS: string): IResult => {
  const m = BigInt('0b' + M.split('').reverse().join(''))
  const ms = BigInt(MS.slice(MS.length - RIGHT - LEN, MS.length - RIGHT))
  console.log(M, m, ms);
  
  return {
    status: m === ms ? 'success' : 'error',
    label: m === ms ? 'M == M\' - зашифровано и расшифровано корректно' : 'M != M\' - неверное сообщение',
  }
}

const Check = ({onClick}: {onClick: () => void}) => {
  return (
    <div className='row gap-10' onClick={onClick}>
      <img className='play' src={playIcon} alt='play' />
    </div>
  )
}

const useInput = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue)
  const onChange = (e: any) => {
    setValue(e.target.value)
  }
  return {
    value,
    onChange,
  }
}

const Input = ({ label, ...props }) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const updateInputWidth = () => {
    if (spanRef.current && inputRef.current) {
      spanRef.current.textContent = inputRef.current.value || props.placeholder || ''
      inputRef.current.style.width = `${spanRef.current.offsetWidth * 0.84}px`
    }
  }
  useEffect(() => {
    updateInputWidth()
  }, [])

  return (
    <div className="value">
      <p>{label}</p>
      <span ref={spanRef} style={{
        position: 'absolute',
        visibility: 'hidden',
        whiteSpace: 'pre',
        fontSize: 'inherit',
        fontFamily: 'inherit',
      }} />
      <input
        ref={inputRef}
        {...props}
        onInput={updateInputWidth}
      />
    </div>
  )
}

type IResult = {
  label: string
  status: 'success' | 'error'
}
const Result = ({label, status}: IResult) => {
  return (
    <div className={`result-${status}`}>
      <p>{label}</p>
    </div>
  )
}

const NumUnderline: React.FC<{num: string}> = ({num}) => {
  const l = num.slice(0, num.length - RIGHT - LEN)
  const mid = num.slice(num.length - RIGHT - LEN, num.length - RIGHT)
  const r = num.slice(num.length - RIGHT)
  return (
    <div className='center'>
      <p>{l}</p>
      <p style={{color: '#31E458'}}>{mid}</p>
      <p>{r}</p>
    </div>
  )
}

export const Demo: RFC = () => {
  const R = useInput('41')
  const S = useInput('59')
  const T = useInput('2418')
  const [result1, setResult1] = useState<IResult | null>(null)
  const checkFirstStep = () => {
    setResult1(calculateStep1(R.value, S.value, T.value))
  }

  const [hightPack, setHightPack] = useState<string[]>([])
  const lightPack = DEFAULT_LIGHT_BACKPACK.map((value) => {
    return useInput(value)
  })
  useEffect(() => {
    setHightPack(calculateStep2(R.value, T.value, lightPack.map(({ value }) => value)))
  }, [R.value, T.value, ...lightPack.map(({ value }) => value)])

  const M = useInput('10011')
  const [C, setC] = useState('0')
  useEffect(() => {
    if (M.value && hightPack.length) {
      setC(mult(M.value, hightPack))
    }
  }, [hightPack, M.value])

  const [MS, setMS] = useState('0')
  useEffect(() => {
    setMS(multNums(C, S.value, T.value))
  }, [C, S.value, T.value])
  const [result4, setResult4] = useState<IResult | null>(null)
  const check4 = () => {
    setResult4(calculateStep4(M.value, MS))
  }

  return (
    <div className='unit-container'>
      <UnitHeader />
      <div className='demo-content shadow'>
        <div className="block">
          <h3>Шаг 1. Генерация пары ключей.</h3>
          <p>Возьмем R, S, T такие, что R * S = 1 mod T</p>
          <div className='row gap-15'>
            <div className='values'>
              <Input {...R} label='R = ' />
              <Input {...S} label='S = ' />
              <Input {...T} label='T = ' />
            </div>
            <Check onClick={checkFirstStep}/>
          </div>
          {result1 && <Result {...result1} />}
        </div>
        <div className="block">
          <h3>Шаг 2. Создание легкого и тяжелого рюкзака.</h3>
          <p>Cоставим легкую задачу об укладке рюкзака</p>
          <div className='row gap-15'>
            <div className='values'>
              {lightPack.map((a, idx) => (
                <Input key={`a${idx} = `} {...a} label={`a${idx} = `} />
              ))}
            </div>
          </div>
          <p>На основе легкого рюкзака и R составим трудную задачу об укладке рюкзака. B = A * R.</p>
          <div className='row gap-15'>
            <div className='values'>
              {lightPack.map((a, idx) => (
                <div>{a.value}</div>
              ))}
            </div>
            <div className='center'>*</div>
            <div className='center'>{R.value}</div>
            <div className='center'>=</div>
            <div className="values">
              {hightPack.map((v) => <div>{v}</div>)}
            </div>
          </div>
        </div>
        <div className="block">
          <h3>Шаг 3. Кодирование сообщения.</h3>
          <div className="row center gap-15 start">
            <p>Сообщение</p>
            <div className='row gap-15'>
              <div className='values'>
                <Input {...M} label='M = ' />
              </div>
            </div>
            <p>шифруется по формуле C = M * b</p>
          </div>
          <div className="row gap-15">
            <div className="center">
              <div>{M.value}</div>
            </div>
            <div className="center">*</div>
            <div className='values'>
              {lightPack.map((a, idx) => (
                <div>{a.value}</div>
              ))}
            </div>
            <div className="center">=</div>
            <div className='center'>{C}</div>
          </div>
        </div>
        <div className="block">
          <h3>Шаг 4. Расшифровка сообщения.</h3>
          <p>Расшифровываем сообщение по формуле M' = C * S mod T</p>
          <div className="row gap-15">
            <div className="values-l center">
              <div>{C}</div>
            </div>
            <div className="center">*</div>
            <div className="values-l center">
              <div>{S.value} mod {T.value}</div>
            </div>
            <div className="center">=</div>
            <NumUnderline num={MS} />
            <Check onClick={check4}/>
          </div>
          {result4 && <Result {...result4} />}
        </div>
      </div>
    </div>
  )
}

Demo.url = root + '/demo'
