import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Movie } from '../movie.model';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesChanged = new BehaviorSubject<Movie[]|null>(null);

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
        this.moviesChanged.next(
          res.map(
            (e) => {
              return {
                ...(e.payload.doc.data() as Movie),
                idField: e.payload.doc.id,
    }}))});
  }


}
