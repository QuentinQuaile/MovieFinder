import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [
    {id: 1, title: 'Gladiator', year:'2000', director: 'Ridley Scott'},
    {id: 2, title: 'Hereditary',year: '2018', director: 'Ari Aster'},
    {id: 3, title: 'Joker', year: '2019', director: 'Todd Phillips'},
    {id: 4, title: 'Bohemian Rhapsody',year:'2018',director: 'Bryan Singer & Dexter Fletcher'}
  ];
  getMovies()
  {
    return this.movieList;
  }
}
