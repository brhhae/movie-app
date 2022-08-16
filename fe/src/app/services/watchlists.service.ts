import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Subject } from 'rxjs';
import { Movie } from '../models/movie.model';
import { Watchlist } from '../models/watchlist.model';
import { collection, query, where, getDocs, deleteDoc } from "firebase/firestore";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WatchlistsService {

  private baseurl="http://localhost:8080/"
 

  watchlistsChanged = new Subject<Watchlist[]>();
  watchlistChanged = new Subject<Movie[]>();

  idToDelete!: string;

  constructor(private http:HttpClient) {
    
  }

  addToWatchList(watchlist: Watchlist) {
    
    this.watchlistsChanged.next([])
    this.http.post<Watchlist[]>(this.baseurl+"to_watch", watchlist).subscribe(
      (watchlists)=>{
        this.watchlistsChanged.next(watchlists)
      }
    )
  }
  update(id: string, data: any) {
  }
  delete(id: string) {

  }

  getAllWatchlists() {
    this.http.get<Watchlist[]>(this.baseurl+"to_watch").subscribe(
      (watchlists)=>{
        this.watchlistsChanged.next(watchlists);
      }
    )
 }



  moviesWithDetails:Movie[]=[]
  getAllForWatchlist(id: string){
    
    
  }



}

