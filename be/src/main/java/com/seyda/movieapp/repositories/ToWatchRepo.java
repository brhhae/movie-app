package com.seyda.movieapp.repositories;

import com.seyda.movieapp.entities.ToWatch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToWatchRepo extends JpaRepository<ToWatch, Long> {
}
