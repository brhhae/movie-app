import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Subject } from 'rxjs';
import { Movie } from '../models/movie.model';
import { Watchlist } from '../models/watchlist.model';
import { collection, query, where, getDocs, deleteDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class WatchlistsService {

  private dbPath = '/watchlists';
  watchlistRef!: AngularFirestoreCollection<Watchlist>;

  watchlistsChanged = new Subject<Movie[]>();

  idToDelete!: string;

  constructor(private db: AngularFirestore) {
    this.watchlistRef = db.collection(this.dbPath);
  }

  getAllWatchlists() {


  }


  getWatchlistMovie(){
  }

  moviesWithDetails:Movie[]=[]
  getAllForWatchlist(id: number){



  }

  addToWatchList(watchlist: Watchlist): any {
    return this.watchlistRef.add({ ...watchlist });
  }
  removeFromWatchlist(id: number){

  }


}

