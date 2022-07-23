import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Review } from '../models/review.model';
import firebase from "firebase/compat";
import Query = firebase.firestore.Query;
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  reviewsChanged= new Subject<Review[]>();
  private baseurl="http://localhost:8080/"


  constructor
  (private http:HttpClient
    ) {
  }
 

  getAllForMovie(id: string){
    this.reviewsChanged.next([]);
    this.http.get<Review[]>(this.baseurl+"reviews/movie/"+id).subscribe(
      values=>{
        this.reviewsChanged.next(values);
      }
    )
  }

  getAllForUser(userId:string){

  }

  create(review: Review) {
    
    this.reviewsChanged.next([])
    this.http.post<Review[]>(this.baseurl+"review", review).subscribe(
      (reviews)=>{
        this.reviewsChanged.next(reviews)
      }
    )
  }
  update(id: string, data: any) {
  }
  delete(id: string) {

  }

  getAllReviews() {
    this.http.get<Review[]>(this.baseurl+"reviews").subscribe(
      (reviews)=>{
        this.reviewsChanged.next(reviews);
      }
    )
 }


}
