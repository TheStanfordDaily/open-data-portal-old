import React from 'react';
//import { Link, Route } from 'react-router-dom';
//import DataDetail from '../dataDetail/DataDetail.jsx';

class DataItem extends React.Component {
    constructor(props) {
        super(props);

        this.item = this.props.obj;

    }

    render() {
        return (
            <div>
                <h1>{this.item.name}</h1>
                <h2>{"Created at " + this.item.create_date}</h2>
                <p>{"Description: " + this.item.description}</p>
                <a href={this.item.source_url} target="_blank" rel="noopener noreferrer">Source</a>
            </div>
        );
    }
}
export default DataItem;