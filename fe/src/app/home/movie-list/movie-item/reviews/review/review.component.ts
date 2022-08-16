import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review.model';
import { ReviewsService } from 'src/app/services/reviews.service';
import { map } from 'rxjs';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviews: Review[]=[];
  currentReview?: Review;
  currentIndex= 0;
  title = '';


  constructor(private reviewsService: ReviewsService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.retrieveReviews();
  }

  retrieveReviews(): void {
    this.reviewsService.getAllForMovie(this.getMovieId());
    this.reviewsService.reviewsChanged.subscribe(
      (reviews)=>{
        this.reviews=reviews;
      }
    );
    
  }

  refreshList(): void {
    this.currentReview = undefined;
    this.currentIndex = 0;
  }

  setActiveReview(review: Review, index: number): void {
    this.currentReview = review;
    this.currentIndex = index;
  }

  private getMovieId() {
    return this.route.snapshot.paramMap.get("id") as string;
  }
}
