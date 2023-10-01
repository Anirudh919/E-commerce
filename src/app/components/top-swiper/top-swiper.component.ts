import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-top-swiper',
  templateUrl: './top-swiper.component.html',
  styleUrls: ['./top-swiper.component.css']
})
export class TopSwiperComponent {

  swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

}
