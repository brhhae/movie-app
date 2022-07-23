package com.seyda.movieapp.repositories;

import com.seyda.movieapp.entities.Movies;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoviesRepo extends JpaRepository<Movies, Long> {
}
