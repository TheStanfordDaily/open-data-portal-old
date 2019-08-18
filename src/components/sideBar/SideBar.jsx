import React from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-jsonschema-form'
//import { Link } from 'react-router-dom';

class SideBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      filters: ""
		};
		console.log("this.state", this.state)
	}

	updatecheckboxes(name) {
		console.log(name);
	}
	render() {
		console.log("props", this.props);
		return (
			<div className = "container">
				<p>Search for the dataset you want! </p>
				<form className="form-inline">
				<div className="form-check">
					<input className="form-check-input" type="checkbox" value={this.state.filters.includes("Finances")} id="Finances"/>
					<label className="form-check-label" for="Finances">
						Finances
					</label>
				</div>
				<div className="form-check">
					<input className="form-check-input" type="checkbox" value={this.state.filters.includes("Academics")} id="Academics"/>
					<label className="form-check-label" for="Academics">
						Academics
					</label>
				</div>
				<div className="form-check">	
					<input className="form-check-input" type="checkbox" value={this.state.filters.includes("Students")} id="Students"/>
					<label className="form-check-label" for="Students">
						Students
					</label>
				</div>
				<div className="form-check">	
				<input className="form-check-input" type="checkbox" value={this.state.filters.includes("R&DE")} id="R&DE"/>
					<label className="form-check-label" for="R&DE">
						R&DE
					</label>
				</div>
				<button type="submit" className="btn btn-primary mb-2" onSubmit={this.props.updateFilters(this.state.filters)}>
					Search
				</button>
				</form>
			</div>
		)
	}
}

export default SideBar;
