'use client';

import { useContext, useEffect } from 'react'
import { CounterContext } from '../app/Providers'

export default function Counter(props) {
  const { count, setCount } = useContext(CounterContext)

  useEffect(() => {
    if (typeof props.initialValue !== 'undefined') {
      setCount(props.initialValue)
    }
  }, [])

  function handleClick () {
    setCount(count => count + 1)
  }

  return (
    <div>
      <strong>{count}</strong>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}
