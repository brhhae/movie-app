import {Component,  OnDestroy, OnInit} from '@angular/core';
import { MoviesService } from "../../services/movies.service";
import { Movie } from '../../models/movie.model';
import {Subscription} from "rxjs";
import { WatchedlistsService } from 'src/app/services/watchedlists.service';
import { WatchlistsService } from 'src/app/services/watchlists.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {

  movieList!: Movie[];
  subscription !: Subscription;

  constructor(private movieService : MoviesService,
              private watchlistService: WatchlistsService,
              private watchedlistService: WatchedlistsService,
              private route: ActivatedRoute) { }

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

  private getMovieId() {
    return this.route.snapshot.paramMap.get("id");
  }

}
