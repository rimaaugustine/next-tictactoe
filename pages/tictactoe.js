import { Component } from "react"
import Head from 'next/head'
import {Tile} from '../components/Tile'

export default class TicTacToe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [
        '', '', '',
        '', '', '',
        '', '', ''
      ]
    }
  }

  reset = () => {
    this.setState({
      board: [
        '', '', '',
        '', '', '',
        '', '', ''
      ]
    })
  }

  getWinner = () => {
    const { board } = this.state
    // Your code here
    // if user wins return 'Player'
    // if computer wins return 'Computer'
    // if no winner and no free tiles return 'Nobody'
    // no return otherwise
  }

  createClickHandler = idx => e => {
    const { board } = this.state
    if (board[idx]) return
    const newBoard = board.map(x => x)
    newBoard[idx] = 'X'
    if (!this.getWinner()) {
      // computer can move?
      // const freeTileIndices = [] // your code here: keep every *index* from free tiles (newBoard.reduce)
      if (freeTileIndices.length) {
        // computer move
        const randomIndex = Math.floor(freeTileIndices.length * Math.random())
        newBoard[freeTileIndices[randomIndex]] = 'O'
        // smarter opponent? implement your own logic instead!
      }
    }
    this.setState({ board: newBoard })
  }

  render () {
    const { board } = this.state
    const winner = this.getWinner()
    return (
      <div>
        <Head>
          <title>TicTacToe Game</title>
          <link rel='stylesheet' href='../static/style.css' />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>

        <h1>TicTacToe</h1>

        <style jsx>{`
          h1 {
            text-align: center;
          }
          .tictactoe-board {
            display: flex;
            flex-wrap: wrap;
            height: 100vmin;
            max-height: 480px;
            width: 100vmin;
            max-width: 480px;
            box-sizing: border-box;
            border: 20px solid transparent;
          }
        `}</style>

        <div className='tictactoe-board'>
          {board.map((tile, idx) => <Tile value={tile} index={idx} onClick={this.createClickHandler(idx)} key={idx} />)}
        </div>

        {winner && <h1>
          {winner} wins!
          <br />
          <button onClick={this.reset}>
            Play again
          </button>
        </h1>}
      </div>
    )
  }
}
