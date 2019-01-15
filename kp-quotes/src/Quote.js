import React from 'react'

const Quote = (props) => {
  console.log(props)
  return (
    <div>{props.quote.quote}</div>
  )
}

export default Quote
