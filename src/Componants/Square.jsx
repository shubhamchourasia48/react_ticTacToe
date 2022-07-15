import React from 'react'

// direct using object destructuring istead of using prop object (props)----{props.value}===>({value})=>{---{value}-----}
const Square = ({value}) => {
  return (
    <button type='button'>{value}</button>
  )
}

export default Square