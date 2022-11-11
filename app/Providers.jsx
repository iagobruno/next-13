'use client';

import { createContext, useState } from 'react'

export const CounterContext = createContext()

export default function Providers({ children }) {
  const [count, setCount] = useState(0)

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  )
}
