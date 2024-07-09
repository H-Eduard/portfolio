import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ContactsComponent } from "../contacts/contacts.component";
import { FooterComponent } from "../footer/footer.component";
import { TechnologyComponent } from "../technology/technology.component";
import { LinksComponent } from '../links/links.component';
@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule, MaterialModule, ContactsComponent, FooterComponent, TechnologyComponent, LinksComponent],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
    constructor(private router: Router) { }

}
