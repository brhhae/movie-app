import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Watchedlist } from '../models/watchedlist.model';

@Injectable({
  providedIn: 'root'
})
export class WatchedlistsService {

  private dbPath = '/watchedlists';
  watchedlistRef!: AngularFirestoreCollection<Watchedlist>;

  constructor(private db: AngularFirestore) {
    this.watchedlistRef = db.collection(this.dbPath);
  }

  getWatchedlist(id: string){
    return this.db.collection('/watchedlists').ref.where('movieId', '==', id);
  }
  addToWatchedList(watchedlist: Watchedlist): any {
    return this.watchedlistRef.add({ ...watchedlist });
  }
  removeFromWatchedlist(id: string): Promise<void> {
    return this.watchedlistRef.doc(id).delete();
  }

  /*addToWatchedList(movieId:string, userId:string) {
    this.db.collection('watchedlists').doc().set({movieId: movieId, userId:1});
  }*/
}
