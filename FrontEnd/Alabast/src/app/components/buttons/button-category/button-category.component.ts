import { Component, HostListener, inject } from '@angular/core';
import { CardMicroComponent } from '../../cards/card-micro/card-micro.component';
import { ButtonMoreComponent } from '../button-more/button-more.component';
import { IActivitiesResponse, IActivity } from '../../../interfaces/iactivity-interface.interface';
import { ActivitiesService } from '../../../services/activities.service';
import { ICategory } from '../../../interfaces/icategory.interface';
import { SpinnerComponent } from '../../utils/spinner/spinner.component';



@Component({
  selector: 'app-button-category',
  imports: [CardMicroComponent, ButtonMoreComponent, SpinnerComponent],
  templateUrl: './button-category.component.html',
  styleUrl: './button-category.component.css'
})
export class ButtonCategoryComponent {
  activitiesService = inject (ActivitiesService) 
  arrActivities: IActivity[] = []
  activitiesResponse: IActivitiesResponse = { data: [] }
  arrCategories : ICategory [] = []
  
  async ngOnInit() {
    this.arrCategories = await this.activitiesService.getAllCategories()
  }
  
  async openMenu(item: ICategory, event: Event): Promise<void> {
    console.log (item.id)
    this.activitiesResponse = await this.activitiesService.getActivitiesByCategory(item.id, 1, 12)
    this.arrActivities = this.activitiesResponse.data
    
    event.stopPropagation(); // Prevent the click event from propagating to the document 
    // Close all other menus
    this.arrCategories.forEach(i => {
      if (i !== item) { i.expanded = false; }
    });
    // Toggle the clicked menu
    item.expanded = !item.expanded;
  }
  @HostListener('document:click', ['$event']) closeMenus(event: Event): void {
      this.arrCategories.forEach(item => {
      item.expanded = false;
    })
  }
}
