import React, { Component } from 'react';

class MovieEdit extends Component {


  render() {
    

    return (
      <form onSubmit={this.props.handleChange}>

        <input type="text" value={this.props.movieEdit.name} onChange={this.props.handleChanges} placeholder="Pelicula" name="name" />
        <input type="text" value={this.props.movieEdit.year} onChange={this.props.handleChanges} placeholder="Año" name="year" />
        <input type="time" value={this.props.movieEdit.duration} onChange={this.props.handleChanges} placeholder="Duracion" name="duration" />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MovieEdit;
