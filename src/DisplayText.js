import React from 'react';
import { connect } from "react-redux";

class DisplayText extends React.Component{
    render(){
        console.log('display text component');
        function getText(item,index){
            var text1=[item.value,item.text].join("-");
            return <li>{text1}</li>
        }
        const list = this.props.Textreducer.usertext.map(getText);
        /*const list = this.props.Textreducer.usertext.map((e,i)=>{
            return (
                <li key={i}>{e}-{this.props.Selectedreducer.value}</li>
            )
        });*/

        // compute success returned API call output
        function getAPIResponse(item,index){
            var responseAPI=[item.name,item.phone].join("--");
            return <li> {responseAPI} </li>
        }
       //const APIOutput=this.props.ThunkReducer.text1.map(getAPIResponse)

        return(
            <div>
                <h3> * User Entered Text * </h3> 
                <ul>  
                    {list}
                </ul>
                <ol>
                    <li> Response</li>

                </ol>   
            </div>           

        )
    }
}
const mapStateToProps = (state) => {
    console.log('display text: mapstatetoProps',state)
    return state;
    }
export default connect(mapStateToProps)(DisplayText);