import React, { Component } from 'react'
import Movie from './Movie'

class MovieList extends Component {
	render () {
		

		return (
			
			<ul>
				{this.props.movies.map(i => {
					return (
						<Movie
							key={i.id}
							id={i.id}
							name={i.name}
							year={i.year}
							duration={i.duration}
							handleUpdate={this.props.updateMovie.bind(this)}
							handleDelete={this.props.deleteMovie.bind(this)}
						/>
					);
				})}
				
			</ul>
				
		);
	}
}

export default MovieList;