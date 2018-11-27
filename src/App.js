import React, { Component } from 'react';
import './App.css';
import Persons from './components/Persons';

class App extends Component {
  state={
    persons: [
      {name: 'Logan',age:4},
      {name: 'John', age:30},
      {name: 'Jenny', age: 22}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler= (newName)=>{
    // console.log('was clicked...')
    this.setState({
      persons: [
        {id: 'asdf',name: newName, age:4},
        {id: 'fda',name: 'John', age:30},
        {id:'dsf',name: 'Jenny', age: 22}
    ]})
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name=event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({
      persons:persons
      })
  }
  togglePersonsHandler = ()=>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  deletePersonHandler = (personIndex)=>{
    console.log(personIndex)
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
  render() {
    const style = {
      margin:"auto",
      border:"1px solid #eee",
      boxShadow:" 0 2px 3px #ccc",
      padding:"16px",
      textAlign: "center",
      marginBottom:"5px"
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          <button style={style} onClick={()=>this.switchNameHandler('Logan!')}>Switch Name</button>
          <Persons
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
          />
          </div>
      );
    }

    const classes = [];
    if(this.state.persons.length<=2){
      classes.push('red'); // classes will be red
    }
    if(this.state.persons.length<=1){
      classes.push('bold'); //classes will be red and bold
    }
    return (
      <div className="App">
        <h1>React App</h1>
        <p className={classes.join(' ')}>this really works</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Names</button><br></br>
        
          {persons}
      </div>
    );
   
  }
}

export default App;
