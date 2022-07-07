import { HttpClient } from '@angular/common/http';
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { MoviesService } from "../../services/movies.service";
import { Movie } from '../../movie.model';
import { switchMap } from 'rxjs/internal/operators/switchMap';
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
    this.subscription = this.movieService.moviesChanged.subscribe({
        next: (movies)=>{
          if(movies)
            this.movieList=movies
          else this.movieService.getMovieList();
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

}
