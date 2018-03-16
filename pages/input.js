import { Component } from "react"
import Board from '../components/board'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Input extends Component {



    render(){
    return(
        <MuiThemeProvider>
        <div >
        <Board />
        </div>
        </MuiThemeProvider>

    )
}


}