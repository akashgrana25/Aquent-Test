import React, { Component } from 'react';
import PizzaList from './PizzaList';

export default class PizzaContainer extends Component {
    constructor(props) {
        super(props);

    }
    render(){
        return (
            <div>
                <PizzaList />
            </div>
        );
    }
}