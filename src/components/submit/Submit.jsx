import React from 'react';

const Submit = () => (
  <div className="container">
    <h2>Submit</h2>
    <p>If you have a dataset you would like us to add, please contact us!</p>

    <div>
    	<form>
    	<div className="form-group">
		    <label for="exampleInputPassword1">Name</label>
		    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter name" />
		  </div>
		  <div className="form-group">
		    <label for="exampleInputEmail1">Email</label>
		    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
		  </div>
		  <div className="form-group">
		    <label for="exampleFormControlTextarea1">Message</label>
		    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
		  </div>
		  <div>
		  	<button type="submit" className="btn btn-primary" onClick={() => alert("Thank you for contacting us. Your message has been sent!")}>Submit!</button>
		  </div>
		</form>
    </div>
  </div>
);

export default Submit;