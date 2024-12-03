import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger, query, group } from '@angular/animations';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('bannerAnimation', [
      transition(':increment', [
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)', position: 'absolute', top: 0, left: 0, width: '100%' }),
            animate('500ms ease-out', style({ transform: 'translateX(0)' }))
          ]),
          query(':leave', [
            style({ transform: 'translateX(0)', position: 'absolute', top: 0, left: 0, width: '100%' }),
            animate('500ms ease-out', style({ transform: 'translateX(-100%)' }))
          ])
        ])
      ]),
      transition(':decrement', [
        group([
          query(':enter', [
            style({ transform: 'translateX(-100%)', position: 'absolute', top: 0, left: 0, width: '100%' }),
            animate('500ms ease-out', style({ transform: 'translateX(0)' }))
          ]),
          query(':leave', [
            style({ transform: 'translateX(0)', position: 'absolute', top: 0, left: 0, width: '100%' }),
            animate('500ms ease-out', style({ transform: 'translateX(100%)' }))
          ])
        ])
      ])
    ])
  ]
})
export class BannerComponent {
  banner_number: number = 1;

  banner_change(event: Event): void {
    const target = event.target as HTMLElement | null;
    if (target?.id === 'prev') {
      this.banner_number = this.banner_number > 1 ? this.banner_number - 1 : 3;
    }
    if (target?.id === 'next') {
      this.banner_number = this.banner_number < 3 ? this.banner_number + 1 : 1;
    }
  }
}
