package com.seyda.movieapp.repositories;

import com.seyda.movieapp.entities.Watched;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WatchedRepo extends JpaRepository<Watched, Long> {
}
