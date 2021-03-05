import { Component } from '@angular/core';
import { Movie } from 'src/movie.model';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies=[];

  public mySelectedMovie: Movie;

  constructor(private movieService: MovieService) { }

  setSelectedMovie(movie:Movie){
    this.mySelectedMovie = movie;
  }

  ngOnInIt(){
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }
}
