import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Movie} from "../../../models/movie.model";
import {Subscription} from "rxjs";
import {MoviesService} from "../../../services/movies.service";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  movie!: Movie;
  subscription !: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private movieService : MoviesService) { }



  ngOnInit(){
    const movieId = this.route.snapshot.paramMap.get("id");

    if (!movieId){
      //  doesnt exist
      //  go home
      console.log(movieId)
      this.router.navigate(['home'])
    }

    //get all movies
    this.movieService.getMovieList();
    this.subscription = this.movieService.moviesChanged.subscribe({
        next: (movies)=>{
          this.movie= movies.filter(movie => movie.idField == movieId)[0];
          if (!this.movie){
          //  in case the id was wrong
          //  ....do something
          }
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }


}
