import React from 'react';
import { Link } from 'react-router-dom';
import DataList from '../dataList/DataList.jsx'
import axios from 'axios';

class DataDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data_list: [] };
	}

	render() {
		if (this.state.data_list.length === 0) {
			return <div>Loading...</div>;
		}
		return (
			<div className="container">
				<div className="left">
					{this.state.data_list && this.state.data_list.map((post) =>
						post.name === this.props.match.params.name &&
						<div>
							<div>
								<h1 id="name"> {post.display_name} </h1>
								Upload Date: {post.create_date}  <br></br>
								<div> Description: {post.description} </div>
								<a href = {post.source_url}> Download Source </a>
							</div>
						</div>
					)}
				</div>
			</div>
		)
	}

	componentDidMount() {
		//const { handle } = this.props.match.params
		axios.get('http://localhost:9000/datasets/list/').then(
			(success) => {
				this.setState({
					data_list: success.data,
				});
			}, (failure) => {
				console.log(failure);
			}
		);
	}
}

export default DataDetail;
