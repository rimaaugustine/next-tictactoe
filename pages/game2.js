import {Component} from "react" 
import Head from 'next/head'
import {Tile} from '../components/Tile.js'

export default class TicTacToe extends Component {
    constructor(props){
        super(props)
        this.state = {
            board: [
                '','','',
                '','','',
                '','',''
                ],
        }
    }

    render(){
        const {board} = this.state
        return (
            <div className='tictactoe-board'>
            {board.map (t => <Tile value={t} />)}
            </div>
        )
    }
}