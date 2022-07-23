package com.seyda.movieapp.services;

import com.seyda.movieapp.entities.Movies;
import com.seyda.movieapp.repositories.MoviesRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MoviesService {

  private MoviesRepo moviesRepo;

  public List<Movies> getAll(){
    return moviesRepo.findAll();
  }

  public Movies getOne(Long id) {
    return moviesRepo.findById(id).get();
  }
}
