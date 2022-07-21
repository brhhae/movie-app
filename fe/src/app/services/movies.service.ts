import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Movie } from '../models/movie.model';
import { Subject} from "rxjs";
import firebase from "firebase/compat";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  moviesChanged = new Subject<Movie[]>();

  constructor(private firestore: AngularFirestore) { }

  // getMovieDoc(idField: string) {
  //   return this.firestore
  //     .collection('movies')
  //     .doc(idField)
  //     .valueChanges();
  // }

  getMovieList() {
    this.firestore
      .collection('movies')
      .snapshotChanges()
      .subscribe((res) => {
        let movies = res.map(
          (e) => {
            return {
              ...(e.payload.doc.data() as Movie),
              idField: e.payload.doc.id,
            }
        });
        this.moviesChanged.next(movies);
      });
  }

  movieChanged = new Subject<Movie>();

  getOneMovie(id: string){
    this.firestore.collection('movies').doc(id).get().subscribe(
      (movie)=>{
        // @ts-ignore
        this.movieChanged.next(movie.data())
      }
    );
  }



}