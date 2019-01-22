import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {

    state = {
        count:0,
        imageUrl : 'https://picsum.photos/200'
    };

    render() {
       return (
       <div>
            <img src = {this.state.imageUrl} alt = ""/>
            <span className = "badge badge-primary m-2"> 
            {this.formatCount()}</span>
           <button className = "btn btn-secondary">Increment</button>
       </div>
       ) ; 
       }
       formatCount()
       {
           const {count } = this.state ;
           return count === 0 ? <h1>Zero</h1> : count; 
       }
    }

export default Counter ;