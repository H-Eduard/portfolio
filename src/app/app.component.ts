import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from "./contacts/contacts.component";
import { TechnologyComponent } from "./technology/technology.component";
import { LinksComponent } from "./links/links.component";
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, PersonalInfoComponent, HeaderComponent, ContactsComponent, TechnologyComponent, LinksComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personalportfolio';
}
