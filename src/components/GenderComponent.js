import React from 'react'

const GenderComponent = (props) => {
  return (
    <>
    <h3>Gender Component</h3>
    <button onClick={()=>props.btnHandler('https://dummyjson.com/users/filter?key=gender&value=male')}>Get Gender</button>
    </>
    )
}

export default GenderComponent