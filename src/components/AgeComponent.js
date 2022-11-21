import React from 'react'

const AgeComponent = (props) => {
    return (
    <>
    <h3>Age Component</h3>
    <button onClick={()=>props.btnHandler('https://dummyjson.com/users/filter?key=age&value=30')}>Get Age</button>
    </>
    )
}

export default AgeComponent