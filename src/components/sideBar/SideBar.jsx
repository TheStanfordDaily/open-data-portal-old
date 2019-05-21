import React from 'react';
//import { Link } from 'react-router-dom';

class SideBar extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };

	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(event) {

  }

  handleClick(event) {
	  var tag = event.target.value;
	  if (this.state.categories.includes(tag)) {
		  var filtered = this.state.categories.filter(cat => {
			  return cat !== tag;
		  });
		  this.setState({
			  categories: filtered,
		  });
		  this.props.updateFilters(filtered);
	  } else {
		  this.setState({
			  categories: [...this.state.categories, tag],
		  });
		  this.props.updateFilters(this.state.categories.concat(tag));
	  }
  }



	render() {
		return(
			<div className = "container">
			<form>
				<h5>Filter By</h5>
				<div id="filter" className="all">
					<div>
						<input type="checkbox" name="Finances" value="Finances" onClick = {this.handleClick}/>
						<label for="Finances">Finances</label>
					</div>
					<div>
						<input type="checkbox" name="Academics" value="Academics" onClick = {this.handleClick}/>
						<label for="Academics">Academics</label>
					</div>
					<div>
						<input type="checkbox" name="Students" value="Students" onClick = {this.handleClick}/>
						<label for="Students">Student Life</label>
					</div>
					<div>
						<input type="checkbox" name="r&de" value="r&de" />
						<label for="r&de">R&DE</label>
					</div>
				</div>

				<h5>Include Data Types</h5>
				<div id="included" className="all">
					<div>
						<input type="checkbox" name="numerical" value="numerical" />
						<label for="numerical">Numerical</label>
					</div>
					<div>
						<input type="checkbox" name="categorical" value="categorical" />
						<label for="categorical">Categorical</label>
					</div>
					<div>
						<input type="checkbox" name="geospatial" value="geospatial" />
						<label for="geospatial">Geospatial</label>
					</div>
					<div>
						<input type="checkbox" name="temporal" value="temporal" />
						<label for="temporal">Temporal</label>
					</div>
					<div>
						Start
						<select>
						  <option value="2015">2015</option>
						  <option value="2016">2016</option>
						  <option value="2017">2017</option>
						  <option value="2018">2018</option>
						</select>
					</div>
					<div>
						End
						<select>
						  <option value="2015">2015</option>
						  <option value="2016">2016</option>
						  <option value="2017">2017</option>
						  <option value="2018">2018</option>
						</select>
					</div>
				</div>

				<div>
			  		<button type="submit" className="btn btn-primary" onClick={() =>
						this.handleSubmit()}>Submit!</button>
			  	</div>
			</form>
			</div>
		)
	}
}

export default SideBar;
