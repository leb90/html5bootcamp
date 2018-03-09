import React, { Component } from 'react';

class MovieEdit extends Component {


  render() {
    

    return (
      <form>

        <input type="text" value={this.props.movieEdit.name} onChange={this.props.handleChanges.bind(this)} placeholder="Pelicula" name="name" />
        <input type="text" value={this.props.movieEdit.year} onChange={this.props.handleChanges.bind(this)} placeholder="Año" name="year" />
        <input type="time" value={this.props.movieEdit.duration} onChange={this.props.handleChanges.bind(this)} placeholder="Duracion" name="duration" />

      </form>
    );
  }
}

export default MovieEdit;
