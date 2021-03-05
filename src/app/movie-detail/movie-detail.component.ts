import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/movie.model';
import {Movie } from "../Movie.model";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @input() movieDetails: Movie;
  constructor() { }

  ngOnInit(): void {
  }

}
