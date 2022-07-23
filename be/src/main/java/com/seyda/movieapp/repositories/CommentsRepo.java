package com.seyda.movieapp.repositories;

import com.seyda.movieapp.entities.Comments;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentsRepo extends JpaRepository<Comments, Long> {

  List<Comments> findAllByMovie_Id(Long id);
}
