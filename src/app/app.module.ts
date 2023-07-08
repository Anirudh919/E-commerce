import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperSliderComponent } from './components/swiper-slider/swiper-slider.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopSwiperComponent } from './components/top-swiper/top-swiper.component';
import { NextDirective } from './components/top-swiper/next.directive';
import { PrevDirective } from './components/top-swiper/prev.directive';
import { CardComponent } from './components/card/card.component';
import { CardItemComponent } from './components/card/card-item/card-item.component';



@NgModule({
  declarations: [
    AppComponent,
    SwiperSliderComponent,
    NavbarComponent,
    TopSwiperComponent,
    NextDirective,
    PrevDirective,
    CardComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
