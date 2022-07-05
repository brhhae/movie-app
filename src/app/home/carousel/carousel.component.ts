import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})



export class CarouselComponent implements OnInit {
  slides = [
    { img: '../../assets/images/marvel.jpg' },
    { img: '../../assets/images/mulan.jpg' },
    { img: '../../assets/images/minions.jpg' }
  ];

  slideConfig = { 
  
  "slidesToShow": 3,
  "slidesToScroll": 1,
  "dots": true,
  "infinite": false,
  "fade": true,
  "cssEase": 'linear',
  "autoplay": true,
  "arrows": true,
  "responsive": [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ] };
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  
  

  constructor() { }

  ngOnInit(){
  
  }
}
