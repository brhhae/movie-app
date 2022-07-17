import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { WatchlistsService } from 'src/app/services/watchlists.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  watchlist: Movie[]=[];

  constructor(private watchlistService: WatchlistsService,) { }

  ngOnInit(): void {
    this.retrieveWatchlist();
  }

  retrieveWatchlist(){
    this.watchlistService.getWatchlistMovie();
  }

}
