import React from "react";

export default class CWUNMT extends React.Component{

    constructor(props){
        super(props)
         
    }

    componentDidMount(){
         
     console.log(" componentDidMount ");
          
    }
     
    componentWillUnmount(){
   console.log("component unmounted ");
    
}
    

render(){
    return (
        <>
        CWUNMT
        </> 
    )


}


}