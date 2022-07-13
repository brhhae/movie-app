import {Component,  OnDestroy, OnInit} from '@angular/core';
import { MoviesService } from "../../services/movies.service";
import { Movie } from '../../models/movie.model';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {

  movieList!: Movie[];
  subscription !: Subscription;

  constructor(private movieService : MoviesService) { }

  ngOnInit(){
    this.movieService.getMovieList();

    this.subscription = this.movieService.moviesChanged.subscribe({
        next: (movies)=>{
          this.movieList=movies
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

}
