import { useState } from 'react'

export const useInput = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue)
  const [disabled, setDisabled] = useState<boolean | undefined>(false)
  const onChange = (e: any) => {
    setValue(e.target.value)
  }
  const set = (t: string) => {
    setValue(t)
  }
  return {
    value,
    onChange,
    set,
    disabled,
    setDisabled,
  }
}
