import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PizzaContainer from '../src/components/PizzaContainer';

// Note: this is the entry point for the entire application

// step 1: you will need to load the pizza data. it is available at /pizza.json. what-wg fetch is pre-installed.
// remember that fetch uses promises.

// step 2: implement the view and required behaviors


class App extends Component {
    render(){
        return(
            <PizzaContainer />
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.content'));