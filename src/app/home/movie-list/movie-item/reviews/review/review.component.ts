import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review.model';
import { ReviewsService } from 'src/app/services/reviews.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviews?: Review[];
  currentReview?: Review;
  currentIndex= 0;
  title = '';

  constructor(private reviewsService: ReviewsService) { }

  ngOnInit(): void {
    this.retrieveReviews();
  }

  retrieveReviews(): void {
    this.reviewsService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.reviews = data;
    });
  }

  refreshList(): void {
    this.currentReview = undefined;
    this.currentIndex = 0;
    this.retrieveReviews();
  }

  setActiveReview(review: Review, index: number): void {
    this.currentReview = review;
    this.currentIndex = index;
  }
}
