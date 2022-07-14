import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
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

  getWatchlist(id: string){
    return this.db.collection('/watchlists').ref.where('movieId', '==', id);
  }
  addToWatchlist(watchlist: Watchlist): any {
    return this.watchlistRef.add({ ...watchlist });
  }
  removeFromWatchlist(id: string): Promise<void> {
    return this.watchlistRef.doc(id).delete();
  }
}
