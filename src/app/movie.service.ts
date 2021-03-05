import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

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
    this.movieList.push({title:movietitle,director:moviedirector,year:movieyear});
  }
}
