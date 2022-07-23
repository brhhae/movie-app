import { Component, OnInit } from '@angular/core';
import { subscribeOn, Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { Watchlist } from 'src/app/models/watchlist.model';
import { WatchlistsService } from 'src/app/services/watchlists.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  watchlist: Watchlist[]=[];
  watchlistMovie: Movie[]=[];


  constructor(private watchlistService: WatchlistsService,) { }

  ngOnInit(): void {
    this.watchlistService.getAllWatchlists();
    this.watchlistService.watchlistsChanged.subscribe({
      next: (movies)=>{
        this.watchlistMovie=movies
        console.log(movies);
        
      },
    })
  }

  removeFromWatchlist(id: number){
    this.watchlistService.removeFromWatchlist(id);
  }

}
