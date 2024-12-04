import { Component, HostListener, inject } from '@angular/core';
import { CardMicroComponent } from '../../card-micro/card-micro.component';
import { ButtonMoreComponent } from '../button-more/button-more.component';
import { IActivitiesResponse, IActivity } from '../../../interfaces/iactivity-interface.interface';
import { ActivitiesService } from '../../../services/activities.service';

interface ICategory {
  text: string,
  icon: string,
  expanded: boolean
}

@Component({
  selector: 'app-button-category',
  imports: [CardMicroComponent, ButtonMoreComponent],
  templateUrl: './button-category.component.html',
  styleUrl: './button-category.component.css'
})
export class ButtonCategoryComponent {
  activitiesService = inject (ActivitiesService) 
  arrActivities: IActivity[] = []
  activitiesResponse: IActivitiesResponse = { data: []}

  buttonContent: ICategory [] = [
    {
      text: "Fires i Mercats",
      icon: "storefront",
      expanded: false
    },
    {
      text: "Gastronomia",
      icon: "grocery",
      expanded: false
    },
    {
      text: "Experiències",
      icon: "spa",
      expanded: false
    },
    {
      text: "Activitats",
      icon: "groups",
      expanded: false
    },
  ] 
  
  async openMenu(item: ICategory, event: Event): Promise<void> {
    this.activitiesResponse = await this.activitiesService.getAllActivities(1, 12)
    this.arrActivities = this.activitiesResponse.data
    
    event.stopPropagation(); // Prevent the click event from propagating to the document 
    // Close all other menus
    this.buttonContent.forEach(i => {
      if (i !== item) { i.expanded = false; }
    });
    // Toggle the clicked menu
    item.expanded = !item.expanded;
  }
  @HostListener('document:click', ['$event']) closeMenus(event: Event): void {
      this.buttonContent.forEach(item => {
      item.expanded = false;
    })
  }
}
