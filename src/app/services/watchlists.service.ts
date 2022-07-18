import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Subject } from 'rxjs';
import { Movie } from '../models/movie.model';
import { Watchlist } from '../models/watchlist.model';

@Injectable({
  providedIn: 'root'
})
export class WatchlistsService {

  private dbPath = '/watchlists';
  watchlistRef!: AngularFirestoreCollection<Watchlist>;
  
  watchlistsChanged = new Subject<Movie[]>();

  constructor(private db: AngularFirestore) {
    this.watchlistRef = db.collection(this.dbPath);
  }

  getAllWatchlists() {
    this.db
    .collection(this.dbPath)
    .snapshotChanges()
    .subscribe((res) => {
      // watch list movies 
      let movies = res.map(
        (e) => {
          
          return {
            ...(e.payload.doc.data() as Watchlist)
          }
      });

      // get details for each  
      movies.forEach(movie => {
        this.getAllForWatchlist(movie.movieId);
        
      });
      
    });

  }


  getWatchlistMovie(){
  }

  moviesWithDetails:Movie[]=[]
  getAllForWatchlist(id: string){

    this.db.collection('movies').doc(id).get().subscribe(
      (movie)=>{
        this.moviesWithDetails.push( movie.data() as Movie);
        this.watchlistsChanged.next(this.moviesWithDetails);
      }
    );
   

  }

  addToWatchList(watchlist: Watchlist): any {
    return this.watchlistRef.add({ ...watchlist });
  }
  removeFromWatchlist(id: string): Promise<void> {
    return this.watchlistRef.doc(id).delete();
  }
}

