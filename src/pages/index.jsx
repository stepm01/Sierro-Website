import { useRef, useState } from 'react'

export const getServerSideProps = async () => {
  return {
    props: {
      greeting: 'Welcome to Mamble',
    },
  }
}

export default function HomePage({ greeting }) {
  const [value, setValue] = useState('')
  const inputRef = useRef({ value: '' })
  console.info('inputRef.current.value', inputRef.current.value)
  const handleOnChange = (e) => {
    console.info('e.target.value', e.target.value)
    setValue(e.target.value.match(/.{1,3}/g).join(','))
  }
  return (
    <>
      <input
        type="text"
        ref={inputRef}
        className={'border-2 border-amber-900 m-5'}
        value={value}
        onChange={handleOnChange}
      />
      <h1 data-testid={'greeting'}>{greeting}</h1>
    </>
  )
}
