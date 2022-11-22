import React from 'react';
// import ReactDOM from 'react-dom/client';

// Element export
const myElement = React.createElement('p', {}, 'I do not use JSX!');

//variable export
 let x = "This is a line";  

 // array export ... ai line ao kora jay
 const flowers = ["Rose", "Waterlily", "sun Flowers"]; 

 //Function export

 const greetings = (name)=>{return name + "! GOOD Afternoon"}

  //Object export

  const person ={
    name: 'Dipu',
    phone: 8801716699548,
    address: 'Shaymoli'
  }

//   Input element .. 

  const inputElement = <input type='text' name='fullname'/>;


export{myElement, x , flowers, greetings, inputElement}
// Avabe default hisebeo rakha jay, sei khetre app.js a import a baire rakhte hbe
export default person  