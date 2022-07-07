import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Movie } from '../movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private firestore: AngularFirestore) { }

  getMovieDoc(idField: string) {
    return this.firestore
      .collection('movies')
      .doc(idField)
      .valueChanges();
  }

  getMovieList() {
    return this.firestore
      .collection('movies')
      .snapshotChanges();
  }

}
