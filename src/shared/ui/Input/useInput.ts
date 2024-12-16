import { useState } from 'react'

export const useInput = (defaultValue: string, defaultDisabled?: boolean) => {
  const [value, setValue] = useState(defaultValue)
  const [disabled, setDisabled] = useState<boolean | undefined>(defaultDisabled === true)
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
