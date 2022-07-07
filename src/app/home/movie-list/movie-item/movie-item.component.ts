import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Movie } from 'src/app/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  movieId: string|null=null;
  movieDetails!: Movie[];

  constructor(private route: ActivatedRoute, private router: Router,
              private movieService : MoviesService) { }


  ngOnInit(){
    this.movieId = this.route.snapshot.paramMap.get("id");   

    if (!this.movieId){
    //  doesnt exist
    //  go home
      this.router.navigate(['home'])
    }
  }

  

}
