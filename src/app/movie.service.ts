import { Injectable } from '@angular/core';
import { Movie } from 'src/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movie: Movie;

  constructor() { }

  movieList = [
    new Movie('The Godfather', '1972', 'Francis FordCoppola'),
    new Movie('Millers Crossing', '1990', 'The Coen Brothers'),
    new Movie('Dial M for Murder', '1954', 'Alfred Hitchcock'),
    new Movie('Whiplash', '2014', 'Damien Chazelle')
  ]
  getMovies()
  {
    return this.movieList;
  }
  addMovie(movietitle:string,moviedirector:string, movieyear:string, ){
    this.movieList.push(new Movie(movietitle, movieyear, moviedirector));
  }
}
