import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  banner_number : number = 1

  banner_change(event: Event): void {
    const target = event.target as HTMLElement | null
    
    if (target?.id === "prev") {
      (this.banner_number > 1) ? this.banner_number -= 1 :
      this.banner_number = 3
    }
    if (target?.id === "next") {
      (this.banner_number < 3) ? this.banner_number += 1 : 
      this.banner_number = 1
    }
    console.log (target?.id)
  } 
}
