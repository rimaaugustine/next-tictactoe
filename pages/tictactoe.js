import { Component } from "react"
import Head from 'next/head'
import {Tile} from '../components/Tile'

//material UI 
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import * as Colors from 'material-ui/styles/colors';


export default class TicTacToe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [
        '', '', '',
        '', '', '',
        '', '', ''
      ],
      winner: null
    }
  }

//reset to initial state 
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
    if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') return 'Player'
    if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') return 'Player'
    if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') return 'Player'
    if (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') return 'Player'
    if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') return 'Player'
    if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') return 'Player'
    if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') return 'Player'
    if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') return 'Player'
    if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') return 'Computer'
    if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') return 'Computer'
    if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') return 'Computer'
    if (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') return 'Computer'
    if (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') return 'Computer'
    if (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') return 'Computer'
    if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') return 'Computer'
    if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') return 'Computer'
    if (!board.filter(t => !t).length) return 'Nobody'; 
    //(not) board.filter(tiles => not (tiles).length) 
    
  }

  createClickHandler = idx => e => {
    const { board } = this.state
    if (board[idx]) return
    const newBoard = board.map(x => x)
    newBoard[idx] = 'X'
    //console.log(newBoard[0])
    //if false
    
    if (!this.getWinner()) {
      // computer can move? computer can pick one 
      //const freeTileIndices = [] // your code here: keep every *index* from free tiles (newBoard.reduce)
      const freeTileIndices = newBoard.reduce((p, c, i) => {
       if (!c) p.push(i)
       return p
        }, [])
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
      <MuiThemeProvider>
      <div>
        <Head>
          <title>TicTacToe Game</title>
          <link rel='stylesheet' href='../static/style.css' />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <AppBar title="TicTacToe"/>
        <style>{`
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
        <div className="container">
        <Card style={{backgroundColor: "#F5F5F5"}}>
      
      <div className="flex-container">
        <div className='tictactoe-board'>
          {board.map((tile, idx) => 
          <Tile value={tile} index={idx} onClick={this.createClickHandler(idx)} key={idx} />
          )}
        </div>
          </div>
          <CardActions>
        {winner && <h1>
          {winner} wins!
          <br />
         </h1>}
          <FlatButton label="RESTART GAME" fullWidth={true}  backgroundColor="#00BCD4" onClick={this.reset} />
         </CardActions>
          
          
        </Card>
        </div>
      </div>
      </MuiThemeProvider>
    )
  }
}
