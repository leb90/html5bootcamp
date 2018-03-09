import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieForm from './MovieForm';
import MovieEdit from './MovieEdit';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {id: 1, name: "peli 1", year: "2001",duration:'01:05'},
        {id: 2, name: "test 2", year: "1999",duration:'01:03'}
      ]
    };
    this.updateMovie = this.updateMovie.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  makeid() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  


  handleOnAddMovie (event) {
    event.preventDefault();
    let movie = {
		id:this.makeid(),
		name: event.target.name.value,
		year: event.target.year.value,
		duration: event.target.duration.value
    };
    this.setState({
      movies: this.state.movies.concat([movie])
    });

  }

  updateMovie(id) {

    this.state.movies.forEach(x =>{
      if(x.id===id){

        this.dataMovie = x
      }
    })
    this.setState({
      movie: this.dataMovie
    });

  }
  deleteMovie(id) {
    let movies = this.state.movies
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id === id){
        movies.splice(i, 1) 
        this.setState({movies: movies})
      }
    }

  }

  handleChange(e) {
    let movies = this.state.movies.slice()
    let change = {}
    
    change[e.target.name] = e.target.value
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id === this.dataMovie.id){
        movies[i][e.target.name] = e.target.value 
        this.setState({movies: movies})
      }
    }   
  }
 




  render() {
    console.log(this.state.movies);
    return (
		<div className="App">
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2>Bienvenido a React</h2>
			</div>
			<div>
				<p><strong>Añade Peliculas</strong></p>
				<MovieList movies={this.state.movies} updateMovie={this.updateMovie} deleteMovie={this.deleteMovie}/>
				<MovieForm onAddMovie={this.handleOnAddMovie.bind(this)} />
        
				{this.state.movie && <MovieEdit movieEdit={this.state.movie} handleChanges={this.handleChange} />}
			</div>
		</div>
    );
  }
}

export default App;