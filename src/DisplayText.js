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
    console.log('display text: mapstatetoProps',state)
    return state;
    }
export default connect(mapStateToProps)(DisplayText);