import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

export default class PizzaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            filter_list: [],
            query_str: '',
            loading: true
        }
        this.renderList = this.renderList.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.filterInput = this.filterInput.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    componentDidMount() {
        fetch('../../pizza.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(data.pizzas);
            this.setState({
                list: data.pizzas,
                filter_list: data.pizzas,
                loading: false
            })
        })

    }

    componentWillReceiveProps(nextProps) {
        this.setState(
            {
                list: nextProps.list,
                filter_list: nextProps.list
            },
            () => this.filterList()
        );
    }


    handleChange() {
        let filter_list = this.state.filter_list;
        let lc_list = [];
        //Getting the array in lowercase
        lc_list = filter_list.map(value => value);
        //Custom function to reverse sort the array by pizza type name
        let rv_list = [];
        rv_list = lc_list.sort((a, b) => {
            return (a > b ? -1 : ((b > a) ? 1 : 0));
        });
        this.setState({ filter_list: rv_list });
        this.renderList();
    }

    onChange(event) {
        const query_str = event.target.value;
        this.setState({ query_str }, () => this.filterInput());
    }

    filterInput() {
        let list = this.state.list;
        let query_str = this.state.query_str;

        list = list.filter((item) => {
            return item.toLowerCase().indexOf(query_str) != -1;
        });
        this.setState({ filter_list: list });
        console.log(this.state.list);
        this.renderList();

    }

    renderList() {
        const pizza_list = (this.state.filter_list).map((pizza) => {
            return <li className="list-group-item" key={pizza}>{pizza}</li>
        })
        return pizza_list;
    }

    render() {
        if (this.state.loading) {
            return <div><h1>Loading...</h1></div>
        }
        return (
            <div className="container">
                <div className="jumbotron ">
                    <ul className="mt-3 list-group col-md-5">
                        {this.renderList()}
                    </ul>
                    <div className="mt-3 input-group">
                        <input
                            className="mr-3 form-control col-lg-4"
                            onChange={this.onChange}
                            value={this.state.query_str}
                            placeholder="Filter Your Choice!"
                            type='text' />
                        <button
                            className="btn btn-primary"
                            onClick={() => this.handleChange()} >
                            Sort
                            </button>
                    </div>
                </div>
            </div>
        );
    }
}