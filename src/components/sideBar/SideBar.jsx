import React from 'react';
import Form from 'react-jsonschema-form'
//import { Link } from 'react-router-dom';

class SideBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleSubmit(data) {
	  this.props.updateFilters(data);
  	}

	render() {
		let schema ={
			"title": "Filter By:",
			"type": "object",
			"required": [

			],
			"properties": {
				"category": {
					"type": "array",
					"title": "Category:",
					"items": {
						"type": "string",
						"enum": [
							"Finances",
							"Academics",
							"Students",
							"R&DE"
						]
					},
					"uniqueItems": true
				},
				"data_type": {
					"type": "array",
					"title": "Data Type:",
					"items": {
						"type": "string",
						"enum": [
							"Numerical",
							"Categorical",
							"Temporal"
						]
					},
					"uniqueItems": true
				}
			}
		}
		let uiSchema = {
			"category": {
				"ui:widget": "checkboxes"
			},
			"data_type": {
				"ui:widget": "checkboxes"
			}
		}
		return(
			<div className = "container">
			 <p>Search for the dataset you want! </p>
				<Form schema={schema} uiSchema={uiSchema} onSubmit={e => this.handleSubmit(e.formData)} >
					<button>Search</button>
				</Form>
			</div>
		);
	}
}

export default SideBar;
