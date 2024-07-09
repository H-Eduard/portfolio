import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) { }

  contacts(){
    this.router.navigateByUrl('/contacts');
  }
  
  technology(){
    this.router.navigateByUrl('technology');
  }

  links(){
    this.router.navigateByUrl('links');
  }

  personalInfo(){
    this.router.navigateByUrl('personal-info');
  }
}
