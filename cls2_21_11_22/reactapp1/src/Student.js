import React from "react";

class Student extends React.Component {
    constructor(){
        super();
        this.state ={id:'1252', name:'Rabbany'}

    }
    render(){
        return <h2>Name is {this.state.name} and ID is {this.state.id} </h2>

    }

}

export default Student;