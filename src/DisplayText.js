import React from 'react';
import { connect } from "react-redux";

class DisplayText extends React.Component{
    render(){
        console.log('display text component');
        const list = this.props.Textreducer.userText.map((e,i)=>{
            return (
                <li key={i}>{e}</li>
            )
        });
        return(
            <div>
                <h3> * User Entered Text * </h3> 
                <ul>  
                    {list}
                </ul>
            </div>           

        )
    }
}
const mapStateToProps = (state) => {
    return state;
    }
export default connect(mapStateToProps)(DisplayText);