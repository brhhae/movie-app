package com.seyda.movieapp.controllers;

import com.seyda.movieapp.entities.Movies;
import com.seyda.movieapp.services.MoviesService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class MoviesController {

  private MoviesService moviesService;

  @CrossOrigin
  @GetMapping("movies")
  public List<Movies> getall(){
    return moviesService.getAll();
  }

  @CrossOrigin
  @GetMapping("movie/{id}")
  public Movies getone(@PathVariable final Long id){
    return moviesService.getOne(id);
  }

}
