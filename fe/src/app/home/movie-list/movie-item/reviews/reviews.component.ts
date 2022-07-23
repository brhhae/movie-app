import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review.model';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Review[]=[]
  @Input() movieid: number=0;

  constructor(
    private reviewService: ReviewsService
  ) { }

  ngOnInit(): void {
    this.reviewService.getAllForMovie(String(this.movieid))
    this.reviewService.reviewsChanged.subscribe(
      values=>{
        this.reviews=values;
      }
    )
  
  }

}
