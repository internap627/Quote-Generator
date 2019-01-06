import React, { Component } from 'react';



class Card extends Component {

  render() {
    const quote = this.props.quote
    const newQuote = this.props.getQuote
    const share = this.props.shareTwitter
    const colour = this.props.colour
    return (
      <div className="Card quote-box">
      <div className="row">
    <div className="col s12 m6">
      <div className="card white darken-1">
        <div className={`card-content ${colour}-text`}>
          <span className="card-title">Quote</span>
          <p>{quote && quote.quote}</p>
        </div>
        <div className={`card-content ${colour}-text`}>
          
          <p>"{quote && quote.author}"</p>
        </div>
        <div className="card-action">
        <a onClick={() => share()} className={`waves-effect waves-light btn ${colour}`}>Tweet</a>
        <a onClick={() => newQuote()} className={`waves-effect waves-light btn ${colour}`}>New Quote</a>
        </div>
      </div>
    </div>
  </div>
      </div>
    );
  }
}

export default Card;