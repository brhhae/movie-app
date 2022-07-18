import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Subject } from 'rxjs';
import { Watchlist } from '../models/watchlist.model';

@Injectable({
  providedIn: 'root'
})
export class WatchlistsService {

  private dbPath = '/watchlists';
  watchlistRef!: AngularFirestoreCollection<Watchlist>;
  
  watchlistsChanged = new Subject<Watchlist[]>();

  constructor(private db: AngularFirestore) {
    this.watchlistRef = db.collection(this.dbPath);
  }

  getAllWatchlists() {

}


  getWatchlistMovie(){
  }

  getAllForWatchlist(id: string){
    return this.db.collection('/movies').ref.where('idField', '==', id);
  }

  addToWatchList(watchlist: Watchlist): any {
    return this.watchlistRef.add({ ...watchlist });
  }
  removeFromWatchlist(id: string): Promise<void> {
    return this.watchlistRef.doc(id).delete();
  }
}
