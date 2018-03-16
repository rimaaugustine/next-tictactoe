import { Component } from "react"
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const Styles= {
    commentContainer :{
    backgroundColor: "pink",
    padding: 10
    },
    text : {
        color: "white",
        fontSize: 18,
        fontFamily: "Arial",
        padding: 20
    },
    button : {
        margin: 5
    }
}

class Form extends Component{
            constructor(props) {
                super(props)
                this.state = {
                editing : false
                }
            }
        HandleOnClickEdit = () =>{
        this.setState({editing: true});
        }

        Save = () => {
            let val = this.refs.newText.input.value;
            this.props.updateForm(val, this.props.index)
            this.setState({editing: false});
        }

        HandleOnClickRemove = () => {
            this.props.deleteFromBoard(this.props.index)
        }


        renderNormal = () => {
            return(
                <div style={Styles.commentContainer} >
                <div style={Styles.text} >Name: {this.props.children} </div>
                <div style={Styles.text} >Address: {this.props.children} </div>
                    <FlatButton onClick={this.HandleOnClickEdit} label="Edit" backgroundColor="white" style={Styles.button}/>
                    <FlatButton onClick={this.HandleOnClickRemove} label="Remove" backgroundColor="white" style={Styles.button}/>
                    <div>
                        <br/>
                    </div>
                </div>
            )
        }

        renderForm = () => {
            return(
                <div style={Styles.commentContainer} >
                <div><TextField ref="newText" defaultValue={this.props.children} id="" floatingLabelText="Name"
                floatingLabelFixed={true}></TextField> </div>
                <div><TextField ref="newAddress" defaultValue={this.props.children} id="" floatingLabelText="Address"
                floatingLabelFixed={true}></TextField> </div>
                    <FlatButton onClick={this.Save} label="Save" backgroundColor="white" style={Styles.button}/>
                    <div>
                    <br/>
                </div>
                </div>
            )
        }

            render(){
            if(this.state.editing){
                return this.renderForm();
            }else {
                return this.renderNormal();
            }
        }

        }
export default Form