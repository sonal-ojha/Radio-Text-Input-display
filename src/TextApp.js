import React from 'react';
import {connect} from 'react-redux';
import {showSelectedUser,UserEnteredText} from './Actions';

class TextApp extends React.Component{
    constructor(props){
        super(props);
        this.state=
        {
            selectedUser:"vilva",
            inputText:"",
        }
        this.selectionMade=this.selectionMade.bind(this);
        this.handleUserSelection=this.handleUserSelection.bind(this); 
        this.AddUserText=this.AddUserText.bind(this);
        this.handleInputText=this.handleInputText.bind(this);
    }

    selectionMade(e){
        this.setState(
            {   
                selectedUser:e.target.value                
            }
        )   
        console.log('set state:',this.state.selectedUser);   
        console.log('In selection made',e.target.value,this.state);
        this.props.dispatch(showSelectedUser(this.state))
        //this.props.dispatch(showSelectedUser(e.target.value))
    }
 
    handleUserSelection(e){
        console.log('on change',e.target.checked);
        this.setState(
            {
                selectedUser:e.target.value
            }
        )        
    }
    

    AddUserText(e){
        e.preventDefault();
        if(this.state.inputText){
            console.log('dispatch:add user text: checking option',this.state)
            this.props.dispatch(UserEnteredText(this.state))
        }
        this.setState({
            ...this.state, inputText: ""
        })
    }

    /* User entered text */
    handleInputText(e){
        /*e.preventDefault();*/
        console.log('handle input text : ',e.target.value);
        this.setState({
            inputText:e.target.value
        })
    }

    render(){
        return(
            <div>
            <label>
                <input type="radio" name="curentUser" value="vilva" checked={this.state.selectedUser==='vilva'} 
                    onClick={this.selectionMade} onChange={this.handleUserSelection}/>
                Vilva
            </label>
            <label>
                <input type="radio" name="curentUser" value="sonu" checked={this.state.selectedUser==='sonu'} 
                        onClick={this.selectionMade} onChange={this.handleUserSelection}/>
                Sonu
            </label> 
            <p> Selected option is : {this.state.selectedUser  }</p>
            <div>
                <input type="text" name="txtUser" placeholder="enter text here" value={this.state.inputText}
                     onChange={this.handleInputText}/>
                <button name="btnaddText" onClick={this.AddUserText}>Add Text</button>
            </div>       

        </div>       
        );
    }
}

const mapStateToProps=(state)=>{
    console.log('mapstateToProps-text',state)
    return state;
}

export default connect(mapStateToProps)(TextApp); 