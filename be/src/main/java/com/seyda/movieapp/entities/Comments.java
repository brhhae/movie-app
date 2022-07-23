package com.seyda.movieapp.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Entity
@Getter
@Setter
public class Comments {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String dateUpdate;
  private String review;
  private String title;
  @ManyToOne(cascade = CascadeType.MERGE)
  @JoinColumn(name = "movie_id")
  private Movies movie;
//  @ManyToOne
//  @JoinColumn(name = "user_id")
//  private Users user;
}
