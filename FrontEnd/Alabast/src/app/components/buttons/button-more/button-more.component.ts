import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-more',
  imports: [],
  templateUrl: './button-more.component.html',
  styleUrl: './button-more.component.css'
})
export class ButtonMoreComponent {
  @Input () input_text : String = '' 
  @Input () icon? : String = '' 
}
