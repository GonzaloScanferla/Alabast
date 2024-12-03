import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
