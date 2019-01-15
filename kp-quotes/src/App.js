import React, { Component } from 'react';
import Quote from './Quote'
import NewQuoteButton from './NewQuoteButton'
import NavBar from './NavBar'

const apiUrl = 'http://localhost:3000/quotes'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: [],
      currentQuote: {}
    }
  }

  componentDidMount () {
    this.fetchQuotes()
  }

  fetchQuotes = () => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(quoteData => {
        this.setState({
          quotes: quoteData,
          currentQuote: quoteData[Math.floor(Math.random() * quoteData.length)]
        })
      })
  }

  getQuote = () => {
    this.setState({currentQuote: this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]})
  }

  render() {
    if(this.state.quotes.length > 0) {
    return (
      <React.Fragment>
      <NavBar />
      <Quote quote={this.state.currentQuote}/>
      <NewQuoteButton getQuote={() => this.getQuote()} />
      </ React.Fragment>
    )
  } else {
    return <div>Loafing...</div>
  }
  }
}

export default App;
