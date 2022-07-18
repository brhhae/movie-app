import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { Watchedlist } from 'src/app/models/watchedlist.model';
import { WatchedlistsService } from 'src/app/services/watchedlists.service';

@Component({
  selector: 'app-watchedlist',
  templateUrl: './watchedlist.component.html',
  styleUrls: ['./watchedlist.component.css']
})
export class WatchedlistComponent implements OnInit {
  
  watchedlist: Watchedlist[]=[];
  watchedlistMovie: Movie[]=[];
  
  constructor(private watchedlistService: WatchedlistsService,) { }

  ngOnInit(): void {
    this.watchedlistService.getAllWatchedlists();
    this.watchedlistService.watchedlistsChanged.subscribe({
      next: (movies)=>{
        this.watchedlistMovie=movies
        console.log(movies);
        
      },
    })
  }

}
