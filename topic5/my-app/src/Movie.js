import React, { Component } from 'react';

class Movie extends Component {
	render () {
		
		return (
			<li>
				{this.props.name} - {this.props.year} -	{this.props.duration} -	<button onClick = {() => this.props.handleUpdate(this.props.id)}>id</button>
			</li>	
		);
  	}
}

export default Movie;