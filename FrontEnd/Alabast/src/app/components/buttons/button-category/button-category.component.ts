import { Component, HostListener } from '@angular/core';
import { CardMicroComponent } from '../../card-micro/card-micro.component';
import { ButtonMoreComponent } from '../button-more/button-more.component';

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

  openMenu(item: ICategory, event: Event): void {
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
