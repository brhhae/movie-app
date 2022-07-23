import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Subject} from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  moviesChanged = new Subject<Movie[]>();

  constructor(private http: HttpClient) { }

  private baseurl="http://localhost:8080/"

  getMovieList() {

    this.http.get<Movie[]>(this.baseurl+"movies").subscribe(
      (value)=>{
        this.moviesChanged.next(value)

      }
    )
  }

  movieChanged = new Subject<Movie>();

  getOneMovie(id: string){
    this.http.get<Movie>(this.baseurl+"movie/"+id).subscribe(
      (value)=>{
        this.movieChanged.next(value)
      }
    )
  }



}
