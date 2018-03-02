
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
      input: event.target.value,
      name: "rima"
    })
  }

  render(){
    return (
      <div>
        <input type="text" value={this.state.input} onChange={this.onChange} />
        <p>{this.state.input}</p>
        <h2>{this.state.name}</h2>

      </div>
    )
  }
}

export default SimpleForm