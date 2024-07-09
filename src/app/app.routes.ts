import { Routes } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { TechnologyComponent } from './technology/technology.component';
import { LinksComponent } from './links/links.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';


export const routes: Routes = [
    { path: '', redirectTo: '/personal-info', pathMatch: 'full' },
    {
        path:'personal-info', component:PersonalInfoComponent
    },
    {
        path:'contacts', 
        component: ContactsComponent
    },
    {
        path:'technology', 
        component: TechnologyComponent
    },
    {
        path:'links', 
        component: LinksComponent
    }
];
