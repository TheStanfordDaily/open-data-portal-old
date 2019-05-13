import React from 'react';
import Form from 'react-jsonschema-form'

class Submit extends React.Component{
	render(){
		let schema ={
			"type": "object",
			"properties": {
				"name": {
					"title": "Name",
					"type": "string",
				},
				"email": {
					"title": "Email",
					"type": "string",
					"format": "email"
				},
				"reason": {
					"title": "Reason for contacting",
					"type": "string", 
					"enum": ["New dataset", "Dataset request", "Comment"],
					"default": "Brief description."
				},
				"message": {
					"title": "Message",
					"type": "string"
				},
				"files": {
					"type": "array",
					"title": "If relevant, add files containing datasets.",
					"items": {
						"type": "string",
						"format": "data-url"
					}
				},
				"subscribe":{
					"title": " I want to be notified when new datasets are added!",
					"type": "boolean",
					"default": true
				}
			}
		}
		let uiSchema = {
			"name": {
				"ui:autofocus": true,
				"ui:placeholder": "Enter your name here."
			},
			"email":{
				"ui:placeholder": "What is your email?"
			},
			"message": {
				"ui:widget": "textarea",
				"ui:placeholder": "Type your message!"
			}
		}
		return(
			<div className = "container">
				<h2> Contact Us! </h2>
				<p>In the form below, you can leave us a message or drop 
					us a link to an interesting Stanford dataset you found (or would like to see)! </p>
				<Form schema={schema} uiSchema={uiSchema} onSubmit={e => console.log(e.formData)} />
			</div>
		);
	}
}

export default Submit;
