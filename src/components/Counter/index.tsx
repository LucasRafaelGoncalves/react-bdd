import { FC, useCallback, useState } from 'react'
import CounterView from './CounterView'

const Counter: FC = () => {
  const [counter, setCounter] = useState<number>(0)

  const handleDecrementClick = useCallback(() => {
    setCounter(counter => counter - 1)
  }, [counter, setCounter])

  const handleIncrementClick = useCallback(() => {
    setCounter(counter => counter + 1)
  }, [counter, setCounter])

  return (
    <CounterView
      counter={counter}
      onDecrement={handleDecrementClick}
      onIncrement={handleIncrementClick}
    />
  )
}

export default Counter