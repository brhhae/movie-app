import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs';
import { Movie } from '../models/movie.model';
import { Watchedlist } from '../models/watchedlist.model';

@Injectable({
  providedIn: 'root'
})
export class WatchedlistsService {

  private dbPath = '/watchedlists';
  watchedlistRef!: AngularFirestoreCollection<Watchedlist>;
  watchedlistsChanged = new Subject<Movie[]>();

  constructor(private db: AngularFirestore) {
    this.watchedlistRef = db.collection(this.dbPath);
  }

  getAllWatchedlists() {
    this.db
    .collection(this.dbPath)
    .snapshotChanges()
    .subscribe((res) => {
      // watch list movies
      let movies = res.map(
        (e) => {

          return {
            ...(e.payload.doc.data() as Watchedlist)
          }
      });

      // get details for each
      movies.forEach(movie => {
        this.getAllForWatchedlist(movie.movieId);

      });

    });

  }

  moviesWithDetails:Movie[]=[]
  getAllForWatchedlist(id: number){

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


}
