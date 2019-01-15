import React from 'react'

const Quote = (props) => {
  console.log(props)
  return (
    <div>
    <p>{props.quote.quote}</p>
    <h4>{props.quote.author}</h4>
    </div>
  )
}

export default Quote
