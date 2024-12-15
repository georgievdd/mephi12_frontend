import { useEffect, useRef } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    alwaysOutline?: boolean
}

export const Input = ({ label, ...props }: Props) => {
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

  if (props.disabled) {
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
    <div>{props.value}</div>
  </div>
  )}

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
        className={'alwaysOutline'}
        onInput={updateInputWidth}
      />
    </div>
  )
}
