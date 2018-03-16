import {Component} from "react"

class Game extends Component {
  constructor(props){
    super(props)
    //create initial state
    this.state = {
      choice: null,
      opponent: null
    }
  }
  //function for setState restart button
  //dont need "bind(this)"
  handleButtonClick = () => {
    this.setState({
      choice: null,
      opponent: null
    });
  }

  //this function is confusing ! function createHandler passed the choice as a arguments, re
  createHandler = choice => e => {
    const opponent =  ['R', 'P', 'S'][Math.floor(3 * Math.random())]
    //object literal shorthand
    this.setState({
      choice, 
      opponent
    })
  }
//so, what the difference this, with the normal function ?
  getResult() {
    const { choice, opponent } = this.state
    if (choice === opponent){
      return "same"
    }
    if (choice === 'R') {
      return opponent === 'S' ? 'win' : 'loose'
    } 
    if (choice === 'S') {
      return opponent === 'P' ? 'win' : 'loose'
    }
    return opponent === 'R' ? 'win' : 'loose'
  }

  render(){
    //Destructuring example 
    const { choice, opponent } = this.state
    return (    
      <div>
        <h3>Rock, Paper, Scissors</h3>
        <hr/>
        {!choice && 
        <p>
          Make your choice!
        <button type="button" onClick={this.createHandler('R')}>Rock</button>
        <button type="button" onClick={this.createHandler('P')}>Paper</button>
        <button type="button" onClick={this.createHandler('S')}>Scissors</button>
        </p>
        }
        <p>Computer: {opponent} </p>
        <p>Your choice: {choice} </p>
        {/* without choice it would be throw the first if conclusion which is "same" */}
        <p>Result: {choice && this.getResult()}</p>
        <button type="button" onClick={this.handleButtonClick}>reset</button>
      </div>
    )
  }
}

export default Game