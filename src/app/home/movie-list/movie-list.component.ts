import {Component,  OnDestroy, OnInit} from '@angular/core';
import { MoviesService } from "../../services/movies.service";
import { Movie } from '../../models/movie.model';
import {Subscription} from "rxjs";
import { WatchedlistsService } from 'src/app/services/watchedlists.service';
import { WatchlistsService } from 'src/app/services/watchlists.service';
import { ActivatedRoute } from '@angular/router';
import { Watchedlist } from 'src/app/models/watchedlist.model';
import { Review } from 'src/app/models/review.model';
import { ReviewComponent } from './movie-item/reviews/review/review.component';
import { Watchlist } from 'src/app/models/watchlist.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  
  watched: Watchedlist = new Watchedlist();
  watch: Watchlist = new Watchlist();

  isAddedToWatched!: boolean;
  isAddedToWatch!: boolean;

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

  addToWatched(movieId: String){
    this.watched.movieId= movieId;
    this.watchedlistService.addToWatchedList(this.watched).then(() => {
      console.log('Added to watched list successfully!');
    });
    this.isAddedToWatched= true;
  }

  addToWatch(movieId: String){
    this.watch.movieId= movieId;
    this.watchlistService.addToWatchList(this.watch).then(() => {
      console.log('Added to watch list successfully!');
    });
    this.isAddedToWatch= true;
  }
  
}
