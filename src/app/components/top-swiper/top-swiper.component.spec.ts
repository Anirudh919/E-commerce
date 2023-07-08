import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSwiperComponent } from './top-swiper.component';

describe('TopSwiperComponent', () => {
  let component: TopSwiperComponent;
  let fixture: ComponentFixture<TopSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
