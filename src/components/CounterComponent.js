import React from 'react'
import { memo } from 'react'

const CounterComponent = (props) => {
    console.log('..counter component..')
    return (
    <>
    <h3>Counter Component</h3>
    <p>Count = {props.count}</p>
    <button onClick={props.counterBtn}>Click Here</button>
    </>
  )
}

export default memo(CounterComponent)