import {Component} from "react"

class Game extends Component {
  constructor(props){
    super(props)
    this.state = {
      choice: null,
      opponent: null
    }
  }

  //dont need "bind(this)"
  handleButtonClick = () => {
    this.setState({
      choice: null,
      opponent: null
    });
  }


  createHandler = choice => (e) => {
    const opponent =  ['R', 'P', 'S'][Math.floor(3 * Math.random())]
    this.setState({
      choice, 
      opponent
    })
  }

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
        <p>Result: {choice && this.getResult()}</p>
        <button type="button" onClick={this.handleButtonClick}>reset</button>
      </div>
    )
  }
}

export default Game