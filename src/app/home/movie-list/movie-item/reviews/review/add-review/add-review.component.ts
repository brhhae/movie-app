import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review.model';
import { ReviewsService } from 'src/app/services/reviews.service';
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  review: Review = new Review();
  submitted = false;
  constructor(
    private reviewsService: ReviewsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  saveReview(): void {
    this.review.movieId= this.getMovieId();
    this.reviewsService.create(this.review).then(() => {
      console.log('Created new review successfully!');
      this.submitted = true;
    });
  }
  newReview(): void {
    this.submitted = false;
    this.review = new Review();
  }

  private getMovieId() {
    return this.route.snapshot.paramMap.get("id");
  }
}
