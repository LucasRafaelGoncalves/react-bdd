import { FC } from "react"

interface Props {
  counter: number
  onDecrement: () => void
  onIncrement: () => void
}

const CounterView: FC<Props> = props => (
  <div>
    <div id="root-counter">{props.counter}</div>
    <button onClick={props.onDecrement}>-</button>
    <button onClick={props.onIncrement}>+</button>
  </div>
)

export default CounterView