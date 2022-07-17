import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Review } from '../models/review.model';
import firebase from "firebase/compat";
import Query = firebase.firestore.Query;
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private dbPath = '/comments';
  commentsRef!: AngularFirestoreCollection<Review>;
  constructor(private db: AngularFirestore,private firestore: AngularFirestore) {
    this.commentsRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Review> {
    return this.commentsRef;
  }

  getAllForMovie(id: string){
    return this.db.collection('/comments').ref.where('movieId', '==', id);
  }
  getAllForUser(userId:string){
    return this.db.collection('/comments').ref.where('userId', '==', userId);
  }
  create(review: Review): any {
    return this.commentsRef.add({ ...review });
  }
  update(id: string, data: any): Promise<void> {
    return this.commentsRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
    return this.commentsRef.doc(id).delete();
  }

  getAllReviews() {
    return new Promise<any>((resolve)=> {
    this.db.collection('comments').valueChanges({ idField: 'id' }).subscribe(reviews => resolve(reviews));
    })
   }


}
