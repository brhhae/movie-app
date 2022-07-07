import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Movie} from "../../../movie.model";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  movieId: string|null=null;
  movie!: Movie;

  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit(){
    this.movieId = this.route.snapshot.paramMap.get("id");

    if (!this.movieId){
    //  doesnt exist
    //  go home
      this.router.navigate(['home'])
    }

  }

}
