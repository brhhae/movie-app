import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})



export class CarouselComponent implements OnInit {
  slides = [
    { img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/27D2C8529FA57B6AE389BE2871E7A2821A3D98E6AB68A5D141930D486B6832FA/scale?width=1200&aspectRatio=1.78&format=jpeg' },
    { img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/74837103CFC36C9E82C27589E8290F906B00A27A3AA5BB12906C009163C16978/scale?width=1200&aspectRatio=1.78&format=jpeg' },
    { img: '../../assets/images/minions.jpg' },
    { img: 'https://whatsondisneyplus.com/wp-content/uploads/2020/11/Toy-Story-Featured.png' },
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
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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
