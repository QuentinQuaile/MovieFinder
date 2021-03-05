import { Injectable } from '@angular/core';
import { Movie } from 'src/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movie: Movie;

  constructor() { }

  movieList = [
    {title: 'Gladiator', year:'2000', director: 'Ridley Scott'},
    {title: 'Hereditary',year: '2018', director: 'Ari Aster'},
    {title: 'Joker', year: '2019', director: 'Todd Phillips'},
    {title: 'Bohemian Rhapsody',year:'2018',director: 'Bryan Singer & Dexter Fletcher'}
  ];
  getMovies()
  {
    return this.movieList;
  }
  addMovie(movietitle:string,moviedirector:string, movieyear:string){
    this.movieList.push(new Movie(movietitle, movieyear, moviedirector));
  }
}
