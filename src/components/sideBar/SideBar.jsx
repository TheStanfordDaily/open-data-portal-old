import React from 'react';
//import { Link } from 'react-router-dom';

class SideBar extends React.Component {

	render() {
		return(
			<div>
			<form>
				<h5>Filter By</h5>
				<div id="filter" className="all">
					<div>
						<input type="checkbox" name="finances" value="finances" />
						<label for="finances">Finances</label>
					</div>
					<div>
						<input type="checkbox" name="academics" value="academics" />
						<label for="academics">Academics</label>
					</div>
					<div>
						<input type="checkbox" name="r&de" value="r&de" />
						<label for="r&de">R&DE</label>
					</div>
					<div>
						<input type="checkbox" name="mealplans" value="mealplans" />
						<label for="mealplans">Meal Plans</label>
					</div>
					<div>
						<input type="checkbox" name="studentdorms" value="studentdorms" />
						<label for="studentdorms">Student Dorms</label>
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
			</form>
			</div>
		)
	}
}

export default SideBar;
