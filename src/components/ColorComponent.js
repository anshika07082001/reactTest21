import React from 'react'

const ColorComponent = (props) => {
    return (
    <>
    <h3>Color Component</h3>
    <button onClick={()=>props.btnHandler('https://dummyjson.com/users/filter?key=hair.color&value=Black')}>Get Color</button>
    </>
  )
}

export default ColorComponent