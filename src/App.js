import React, { Component } from 'react';
//import logo from './logo.svg';
import Q1 from './Q1'
import Q2 from './Q2'
import Q3 from './Q3'
import './App.css';
import 'tachyons';


class App extends Component {
  printArray(array, insideArray) {
    let str = '';
    if(!insideArray)
    {
      str += '['
    }
    array.forEach((value, index) => {
      if(Array.isArray(value))
      {
        str += ('[');
        str += this.printArray(value, true);
        str += (']');
        if(index !== array.length - 1)
        {
          str += ', '
        }
      }
      else {
        //console.log("typeof value " + (typeof value));
        str += (value);
        if(index < (array.length - 1))
        {
          str += (', ')
        }
      }
    })
    if(!insideArray)
    {
      str += ']'
    }
    
    return str;
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">ZTM Coding Challenge 6</h1>
        </header>
        <div className="mt4">
          <Q1 printArray={this.printArray}/>
        </div>
        <div className="mt4">
          <Q2 printArray={this.printArray} />
        </div>
        <div className="mt4">
          <Q3 />
        </div>
      </div>
    );
  }
}

export default App;
