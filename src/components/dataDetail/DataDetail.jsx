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
								<b>Upload Date:</b> {post.create_date}  <br></br>
								<div> <b>Description:</b> {post.description} </div>
								<b>Actions:</b> <a href = {post.source_url}> Download Source</a> <a> | </a>
								<a href = {"https://s3.us-east-2.amazonaws.com/open-data-portal/" + this.props.match.params.name + ".csv"}>Download CSV</a>
							</div>
						</div>
					)}
				</div>
			</div>
		)
	}

	componentDidMount() {
		//const { handle } = this.props.match.params
		axios.get('https://open-data-portal.s3.us-east-2.amazonaws.com/metadata.json').then(
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
