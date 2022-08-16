package com.seyda.movieapp.repositories;

import com.seyda.movieapp.entities.ToWatch;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ToWatchRepo extends JpaRepository<ToWatch, Long> {
    List<ToWatch> findAllByMovie_Id(Long id);
}

