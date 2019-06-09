import React, { Component } from 'react';
import '../App.css'
const Form =(props)=>{    
        return ( 
            <form onSubmit={props.getWeather}>
           <input type="text" name="city" placeholder="Your City..."/>
           <input type="text" name="country" placeholder="Your Country..."/>
           <button>Get Weather</button>
           </form>
         )
}
export default Form;