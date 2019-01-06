import React, { Component } from 'react';
import Card from './Card'
const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

class App extends Component {
  
  state = {
    quotes: [],
    quote: {},
    colours: ['purple', 'red', 'pink', 'blue', 'indigo', 'cyan', 'teal', 'lime', 'yellow', 'orange', 'grey', 'blue-grey'],
    colour: ''
  }

  componentDidMount(){
    fetch(url)
    .then(res => res.json())
    .then(res => {
      this.setState({
        quotes: res.quotes
      })
      this.getQuote()
    })
  }

  getQuote = () => {
    let num = Math.floor(Math.random() * 100)
    this.setState({
      quote: this.state.quotes[num]})
    let colourNum = Math.floor(Math.random() * 12)
    this.setState({
      colour: this.state.colours[colourNum]
    })
  }

  shareTwitter = () => {
    const url = "http://google.com";
    const text = this.state.quote.quote
    window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
  }

 

  render() {
    return (
      <div className="App">
        <Card quote={this.state.quote && this.state.quote}
         getQuote={this.getQuote}
         shareTwitter={this.shareTwitter}
         colour={this.state.colour}
          />
      </div>
    );
  }
}

export default App;
