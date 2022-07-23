package com.seyda.movieapp.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewDTO {

  private Long id;
  private String title;
  private String review;
  private Long userId;
  private Long movieId;
}
