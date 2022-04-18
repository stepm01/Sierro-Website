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

  const handleOnChange = (e) => {
    const { value } = e.target
    const valueArr = value.replaceAll(',', '').match(/.{1,3}/g) || []

    setValue(valueArr.join(','))
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
