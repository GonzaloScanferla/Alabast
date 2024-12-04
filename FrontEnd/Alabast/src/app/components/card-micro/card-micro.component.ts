import { Component, Input } from '@angular/core';
import { IActivity } from '../../interfaces/iactivity-interface.interface';

@Component({
  selector: 'app-card-micro',
  imports: [],
  templateUrl: './card-micro.component.html',
  styleUrl: './card-micro.component.css'
})
export class CardMicroComponent {
  @Input() currentActivity: IActivity | any
}
