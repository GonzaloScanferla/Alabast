import { Component } from '@angular/core';
import { ButtonImportantComponent } from "../buttons/button-important/button-important.component";
import { ButtonCategoryComponent } from "../buttons/button-category/button-category.component";

@Component({
  selector: 'app-navbar',
  imports: [ButtonImportantComponent, ButtonCategoryComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
