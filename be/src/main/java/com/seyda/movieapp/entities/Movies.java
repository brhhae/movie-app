package com.seyda.movieapp.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@NoArgsConstructor
@Entity
@Getter
@Setter
public class Movies {
  @Id
  @GeneratedValue( strategy = GenerationType.IDENTITY)
  private Long id;
  private String title;
  private String subtitle;
  private String description;

  private String titleImage;
  private String cardImage;
  private String backgroundImage;

  public Movies(Long id){
    this.id=id;
  }
}
