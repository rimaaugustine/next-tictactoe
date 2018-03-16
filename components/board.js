import { Component } from "react"
import Form from './form'
import FlatButton from 'material-ui/FlatButton';


class Board extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
            data : [],
            }
    }

    componentWillMount(){
        if (typeof window !== "undefined"){
            const arrString = localStorage.getItem("data")
        if( arrString === null){
            this.setState({
                data : []
        
                })
        } else{
            this.setState({
            data : JSON.parse(arrString)
            })
        }
        }
    }

    addForm = (text) => {
        let arr = this.state.data;
        arr.push(text)
        this.setState({data: arr })
        let arrString = JSON.stringify(arr)
        localStorage.setItem("data", arrString)
    }


    removeForm = (i) => {
        console.log("remove" + i)
        let arr = this.state.data;
        arr.splice(i, 1)
        this.setState({data: arr })
        let arrString = JSON.stringify(arr)
        localStorage.setItem("data", arrString)
    }

    updateForm = (newText, i) => {

        console.log("update");
        let arr = this.state.data;
        arr[i] = newText;
        this.setState({data: arr })
        let arrString = JSON.stringify(arr)
        localStorage.setItem("data", arrString)
    }


    
    render(){
        return(
            <div>
             <FlatButton onClick={this.addForm.bind( null, 'default text')} label="add" backgroundColor="grey" style={{margin: 5}} />
          
            {
                this.state.data.map((item, i) => (<Form key={i} index={i} updateForm={this.updateForm} deleteFromBoard={this.removeForm}>
                                                        {item}
                                                      </Form>))
            }
            <br/>
            </div>
        )
    }

}

export default Board