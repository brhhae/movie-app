import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review.model';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  review: Review = new Review();
  submitted = false;
  constructor(private reviewsService: ReviewsService) { }

  ngOnInit(): void {
  }
  saveReview(): void {
    this.reviewsService.create(this.review).then(() => {
      console.log('Created new review successfully!');
      this.submitted = true;
    });
  }
  newReview(): void {
    this.submitted = false;
    this.review = new Review();
  }

}
