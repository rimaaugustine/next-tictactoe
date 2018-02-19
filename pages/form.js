
import {Component} from "react"

class SimpleForm extends Component {

  constructor(){
    super()
    this.state = {
      input: "hey"
    }
  }

  onChange = (event) => {
    console.log(this)
    this.setState({
      input: event.target.value
    })
  }

  render(){
    return (
      <div>
        <input type="text" value={this.state.input} onChange={this.onChange} />
        <p>{this.state.input}</p>
      </div>
    )
  }
}

export default SimpleForm