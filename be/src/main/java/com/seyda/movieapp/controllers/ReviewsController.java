package com.seyda.movieapp.controllers;

import com.seyda.movieapp.dto.ReviewDTO;
import com.seyda.movieapp.entities.Comments;
import com.seyda.movieapp.entities.Movies;
import com.seyda.movieapp.services.ReviewsService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@AllArgsConstructor
public class ReviewsController {

  private ReviewsService reviewsService;

  @CrossOrigin
  @GetMapping("reviews")
  private List<Comments> all (){
     return reviewsService.getAll();
  }

  private ModelMapper modelMapper;

  private ReviewDTO convertToDto(Comments comment) {
    return modelMapper.map(comment, ReviewDTO.class);
  }

  private List<ReviewDTO> convertToDto(List<Comments> comments) {
    List <ReviewDTO> reviewDTOList = new ArrayList<>();
    for(Comments comment: comments){
      reviewDTOList.add(convertToDto(comment));
    }
    return reviewDTOList;

  }



  @CrossOrigin
  @GetMapping("reviews/movie/{id}")
  public List<Comments> getallmovie(@PathVariable final Long id){
    return reviewsService.getAllMovie(id);
  }

  @CrossOrigin
  @GetMapping("reviews/user/{id}")
  public List<Comments> getalluser(@PathVariable final Long id){
      return null;
  }

  @CrossOrigin
  @PostMapping("review")
  public List<Comments> addreview(@RequestBody Comments review){
    Comments comment = new Comments();
    comment.setReview(review.getReview());
    comment.setMovie(new Movies(review.getMovie().getId()));
    comment.setTitle(review.getTitle());

    return reviewsService.create(comment);
  }

  @CrossOrigin
  @GetMapping("deleteReview")
  public void del(@RequestParam final Long id){
    reviewsService.delete(id);
  }

  @CrossOrigin
  @GetMapping("updateReview")
  public void update(@RequestParam final Long id, final String title, final String text){
    reviewsService.update(id,title,text);
  }


}
