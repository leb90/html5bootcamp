import React, { Component } from 'react';

export default class MovieForm extends Component{
  render(){
    return ( 
      <form onSubmit={this.props.onAddMovie}>
			<input type="text" placeholder="Pelicula" name="name" />
			<input type="text" placeholder="Año" name="year" />
			<input type="time" placeholder="Duracion" name="duration" />
			<input type="submit" value="Guardar" />
      </form>
    );
  }
}

