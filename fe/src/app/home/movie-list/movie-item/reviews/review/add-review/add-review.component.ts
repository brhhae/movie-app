import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review.model';
import { ReviewsService } from 'src/app/services/reviews.service';
import {ActivatedRoute, Route, Router} from "@angular/router";
import { MovieItemComponent } from '../../../movie-item.component';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})

export class AddReviewComponent implements OnInit {
  review:Review=new Review();
  
  submitted = false;

  constructor(
    private reviewsService: ReviewsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.review.movie=new Movie();
  }

  saveReview(): void {
    
    this.review.movie.id= this.getMovieId();
    console.log(this.review);
    
    this.reviewsService.create(this.review)
    this.submitted = true;
  }

  newReview(): void {
    this.submitted = false;
    // this.review = new Review();
  }

  private getMovieId() {
    return Number(this.route.snapshot.paramMap.get("id"));
  }
  
}
