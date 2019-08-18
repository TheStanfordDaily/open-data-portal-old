import React from 'react';
import Form from 'react-jsonschema-form'
//import { Link } from 'react-router-dom';

class SideBar extends React.Component {
	constructor(props) {
		super(props);
		console.log("sidebarprops", this.props);
		this.state = {
			filters: this.props.filters
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		console.log("this.state", this.state)
	}

	handleSubmit(data) {
		console.log("data", data);
		debugger;
	  this.props.updateFilters(data);
	}
	handleCheckboxChange(data) {
		console.log("name", data);
		if (this.state.filters.includes(data)) {
			this.setState({
				filters: this.state.filters.replace(data+',','')
			}, () => {
				console.log("removed", this.state.filters);
			})
		} else {
			this.setState({
				filters: this.state.filters + data + ","
			}, () => {
				console.log("added", this.state.filters);
			})
		}
		debugger;
	}

	render() {
		return (
			<div className = "container">
				<p>Search for the dataset you want! </p>
				<form className="form-inline" onSubmit={e => this.handleSubmit(this.state.filters)}>
					<div className="form-check">
						<input className="form-check-input" type="checkbox" id="Finances" 
							checked={this.state.filters.includes("Finances")} onChange={e => this.handleCheckboxChange("Finances")}/>
							<label className="form-check-label" for="Finances">
								Finances
							</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="checkbox" id="Academics"
							checked={this.state.filters.includes("Academics")} onChange={e => this.handleCheckboxChange("Academics")}/>
							<label className="form-check-label" for="Academics">
								Academics
							</label>
					</div>
					<div className="form-check">	
						<input className="form-check-input" type="checkbox" id="Students"
							checked={this.state.filters.includes("Students")} onChange={e => this.handleCheckboxChange("Students")}/>
							<label className="form-check-label" for="Students">
								Students
							</label>
					</div>
					<div className="form-check">	
					<input className="form-check-input" type="checkbox" id="R&DE"
						checked={this.state.filters.includes("R&DE")} onChange={e => this.handleCheckboxChange("R&DE")}/>
						<label className="form-check-label" for="R&DE">
							R&DE
						</label>
					</div>
					<button type="submit" className="btn btn-primary mb-2">
						Search
					</button>
				</form>
			</div>
		)
	}
}

export default SideBar;
