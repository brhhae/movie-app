import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { Review } from 'src/app/models/review.model';
import { ReviewsService } from 'src/app/services/reviews.service';


@Component({
  selector: 'app-my-reviews',
  templateUrl: './my-reviews.component.html',
  styleUrls: ['./my-reviews.component.css']
})
export class MyReviewsComponent implements OnInit {

  reviewList!: Review[];
  subscription !: Subscription;
  reviewId!: string;

  constructor(private reviewsService: ReviewsService) {
  }

  ngOnInit(): void {
    this.reviewsService.getAllReviews();
    this.reviewsService.reviewsChanged.subscribe(
      (reviews) => {
        this.reviewList=reviews;
      }
    )
  }

  editReview(id: number) {
    
  }

  deleteReview(id: number) {
    
  }
}

