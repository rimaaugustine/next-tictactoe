import React from "react"
import Head from 'next/head'

class Index extends React.Component {
  constructor() {
    super()
    // comment
    /*
    multiline comment
    */
    this.state = {
      choice: null
    }
  }
  render () {
    ['r', 'p', 's'][Math.floor(3 * Math.random())]
    return (
      <div>
        <Head>
          <link rel='stylesheet' href='../static/style.css' />
        </Head>
        <h3>Rock, Paper, Scissors</h3>
        {!this.state.choice &&
          <p>
            Make your choice!
            <br />
            <button onClick={() => this.setState({ choice: 'Rock' })}>Rock</button>
            <button onClick={() => this.setState({ choice: 'Paper' })}>Paper</button>
            <button onClick={() => this.setState({ choice: 'Scissors' })}>Scissors</button>
          </p>
        }
        {/* ['a', 'b', 'b'].map((c, i) => <b key={i}>{c}</b>) */}
      </div>
    );
  }
}

export default Index
