import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Watchlist } from '../models/watchlist.model';

@Injectable({
  providedIn: 'root'
})
export class WatchlistsService {

  private dbPath = '/watchlists';
  watchlistRef!: AngularFirestoreCollection<Watchlist>;

  constructor(private db: AngularFirestore) {
    this.watchlistRef = db.collection(this.dbPath);
  }

  getAllWatchlists() {
  }

  getWatchlistMovie(){
  }

  addToWatchList(watchlist: Watchlist): any {
    return this.watchlistRef.add({ ...watchlist });
  }
  removeFromWatchlist(id: string): Promise<void> {
    return this.watchlistRef.doc(id).delete();
  }
}
