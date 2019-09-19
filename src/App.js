import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Form from "./components/Form";

class App extends Component {

	getRecipe(e) {

	    const recipeName = e.target.elements.recipeName.value;
	    e.preventDefault();
		console.log(recipeName);
	}

render(){
  return (

    <div className ="App">
      <header className="App-header">
        <h1 className="App-title">Foodify</h1>
      </header>
      < Form getRecipe={this.getRecipe} />
    </div>

  );
}

}

export default App;
