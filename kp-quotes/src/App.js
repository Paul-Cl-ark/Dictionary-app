import React, { Component } from 'react';
import './App.css';
import Quote from './Quote'

const apiUrl = 'http://localhost:3000/quotes'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: [{quote: ''}]
    }
  }

  componentDidMount () {
    this.fetchQuotes()
  }

  fetchQuotes = () => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(quoteData => {
        console.log(quoteData)
        this.setState({quotes: quoteData})
      })
  }

  getQuote = () => {
    return this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
  }

  render() {
    return (
      <Quote quote={this.getQuote()}/>
    )
  }
}

export default App;
