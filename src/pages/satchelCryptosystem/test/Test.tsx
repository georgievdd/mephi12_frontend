import './styles.scss'
import { RFC } from '@shared/types/component'
import { UnitHeader } from '@shared/ui/UnitHeader'
import { root } from '../config'
import { Suspense, useCallback, useEffect, useState } from 'react'
import { checkTask, getTask } from './models'
import { useFetch } from '@shared/utils/useFetch'
import { Input, useInput } from '@shared/ui/Input'
import { Problem, Solve } from '@entity/task'

const title1 = "Приведите пример ранцевой криптосистемы с кодированием степеней(возможно в некоторых разрядах, ориентируйтесь на легкий ранец)."
const title2 = "Приведите пример ранцевой криптосистемы с кодированием произвольной сверхвозрастающей последовательности"

export const useBackpack = (data: Problem, field: 'lightBackpack' | 'hardBackpack') => {
  const [backpack, set] = useState<{value: string, onChange: (v: any) => void, disabled?: boolean}[]>([])

  const onChange = (idx: number) => (e: any) => {
    console.log(e)
    
    set(prev => prev.map((v, i) => i === idx ? ({value: e.target.value, onChange: v.onChange}) : v))
  }

  useEffect(() => {
    if (data) {
      set(data[field].map((v, i) => ({
        value: v,
        onChange: onChange(i),
        disabled: v !== '0',
      })))
    } else {
      set([])
    }
  }, [data])


  return backpack
}

export const useHardBackpack = (other: any) => {
  const [backpack, set] = useState<{value: string, onChange: (v: any) => void}[]>([])
  const onChange = (idx: number) => (e: any) => {
    set(prev => prev.map((v, i) => i === idx ? ({value: e.target.value, onChange: v.onChange}) : v))
  }
  useEffect(() => {
    set(Array.from({length: other.length}).map((_, i) => ({
      value: '0',
      onChange: onChange(i),
    })))
  }, [other])
  return backpack
}

const useTask = () => {
  const { data } = useFetch(getTask, null)
  const R = useInput('0')
  const S = useInput('0')
  const T = useInput('0')
  const M = useInput('0')
  const C = useInput('0')
  const P = useInput('0')
  const lightBackpack = useBackpack(data, 'lightBackpack')
  const hardBackpack = useHardBackpack(lightBackpack)

  useEffect(() => {
    if (data) {
      console.log(data)
      
      R.set(data.R)
      data.R !== '0' && R.setDisabled(true)

      M.set(data.message)
      M.setDisabled(true)

      P.set(data.power)
      data.power !== '0' && P.setDisabled(true)
    }
  }, [data])

  return {
    data,
    R,
    S,
    T,
    M,
    C,
    P,
    lightBackpack,
    hardBackpack,
  }
}

const TestImpl = () => {
  const { data, R, S, T, lightBackpack, hardBackpack, M, C, P } = useTask()
  const [result, setResult] = useState<{error: string} | null>(null)
  const check = () => {
    checkTask({
      power: Number(P.value),
      id: data.id,
      type: data.label,
      message: M.value.split('').map(i => i === '1'),
      lightBackpack: lightBackpack.map(v => Number(v.value)),
      omega: Number(R.value),
      hardBackpack: hardBackpack.map(v => Number(v.value)),
      encodedMessage: Number(C.value),
      decodedMessage: M.value.split('').map(i => i === '1'),
      module: Number(T.value),
      reverseOmega: Number(S.value),
    }).then(({ errorDescription }) => {
      setResult({error: errorDescription})
    })
  }

  if (!data) return
  return (
    <div className="task-container shadow">
      <h3 className='title'>{P.value === '0' ? title1 : title2}</h3>
      {
        P.value === '0' &&
        <>
          <p className='subtitle'>Степень.</p>
          <Input label='P = ' {...P} />
        </>
      }
      <p className='subtitle'>Ключи</p>
      <Input label='R = ' {...R} />
      <Input label='S = ' {...S} />
      <Input label='T = ' {...T} />
      <p className='subtitle'>Легкий рюкзак</p>
      <div className='row gap-15'>
        <div className='values column gap-5'>
          {lightBackpack.map((a, idx) => (
            <Input key={`a${idx} = `} {...a} label={`a${idx} = `} />
          ))}
        </div>
      </div>
      <p className='subtitle'>Тяжелый рюкзак</p>
      <div className='row gap-15'>
        <div className='values column gap-5'>
          {hardBackpack.map((b, idx) => (
            <Input key={`b${idx} = `} {...b} label={`b${idx} = `} />
          ))}
        </div>
      </div>
      <p className='subtitle'>Сообщение</p>
      <Input label='M = ' {...M} />
      <p className='subtitle'>Зашифрованное сообщение</p>
      <Input label="С = " {...C} />
      <button onClick={check}>Проверить</button>
      {result && (
        <div className={`result-${result.error ? 'error' : 'success'}`}>
          {result.error ? result.error : 'Успех!'}
        </div>
      )}
    </div>
  )
}


export const Test: RFC = () => {
  return (
    <div className='unit-container'>
      <UnitHeader />
      <TestImpl />
    </div>
  )
}

Test.url = root + '/test'
