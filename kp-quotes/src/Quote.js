import React from 'react'

const Quote = (props) => {
  console.log(props)
  return (
    <div>
    <p>{props.quote.quote}</p>
    <h4 className="author">{props.quote.author ? props.quote.author: 'Anon.'}</h4>
    </div>
  )
}

export default Quote
