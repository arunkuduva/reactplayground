import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {

    state = {
        count:1,
        tags: ['tag1', 'tag2', 'tag3'],
        imageUrl : 'https://picsum.photos/200'
    };

    render() {
       return (
       <div>
            <img src = {this.state.imageUrl} alt = ""/>
            <span className = {this.getBadgeClasses()}> 
            {this.formatCount()}</span>
           <button className = "btn btn-secondary">Increment</button>
           <ul >{this.state.tags.map(tag => <li key = {tag}> { tag }</li>)}</ul>
       </div>
       ) ; 
       }
       getBadgeClasses()
       {
           let classes = "badge m-2 badge-";
           classes += this.state.count === 0 ? "warning" : "primary";
           return classes;
       }
       formatCount()
       {
           const {count } = this.state ;
           return count === 0 ? <h1>Zero</h1> : count; 
       }
    }

export default Counter ;