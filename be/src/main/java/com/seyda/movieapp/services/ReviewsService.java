package com.seyda.movieapp.services;

import com.seyda.movieapp.entities.Comments;
import com.seyda.movieapp.repositories.CommentsRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@AllArgsConstructor
@Service
public class ReviewsService {

  private CommentsRepo commentsRepo;
  public List<Comments> getAll() {
    return commentsRepo.findAll();
  }



  public List<Comments> getAllMovie(Long id) {
    return commentsRepo.findAllByMovie_Id(id);
  }

  public List<Comments> getAllUser(Long id) {
    return null;
  }

  public List<Comments> create(Comments comment) {
    commentsRepo.save(comment);
    return getAllMovie(comment.getMovie().getId());
  }

  public void delete(Long id) {
    commentsRepo.deleteById(id);
  }

  public void update(Long id, String title, String text) {
    Comments comment = commentsRepo.findById(id).get();
    comment.setTitle(title);
    comment.setReview(text);
    commentsRepo.save(comment);
  }
}
