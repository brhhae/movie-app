import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})



export class CarouselComponent implements OnInit {
  slides = [
    { img: 'https://itswynnesworld.files.wordpress.com/2019/04/avengers-endgame.jpg?w=720' },
    { img: '../../assets/images/mulan.jpg' },
    { img: '../../assets/images/minions.jpg' },
    { img: 'https://whatsondisneyplus.com/wp-content/uploads/2019/10/EG163BfUwAgnZtw.jpg' },
    { img: 'https://thedisinsider.com/wp-content/uploads/2021/03/scale-5.jpeg' }
  ];

  slideConfig = { 
  
  "slidesToShow": 1,
  "slidesToScroll": 1,
  "dots": true,
  "speed": 500,
  "infinite": true,
  "cssEase": 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
