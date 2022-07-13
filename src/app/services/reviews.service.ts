import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private dbPath = '/comments';
  commentsRef!: AngularFirestoreCollection<Review>;
  constructor(private db: AngularFirestore) {
    this.commentsRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Review> {
    return this.commentsRef;
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
}
