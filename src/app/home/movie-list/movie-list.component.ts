import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from "../../services/movies.service";
import { Movie } from '../../movie.model';
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList!: Movie[];

  constructor(private movieService : MoviesService) { }

  ngOnInit(){
    this.movieService.getMovieList().subscribe((res) => {
      this.movieList = res.map((e) => {
        return {
          ...(e.payload.doc.data() as Movie),
          idField: e.payload.doc.id,
        };
      });

    });

  }

}
