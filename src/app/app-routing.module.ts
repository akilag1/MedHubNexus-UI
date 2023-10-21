import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';
import { AdminLoginPageComponent } from './login-page/admin-login-page/admin-login-page.component';
import { MedicinePageComponent } from './medicine-page/medicine-page.component';

const routes: Routes = [

  { path: '', component: HomePageComponent},
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin-login', component: AdminLoginPageComponent },
  { path: 'medicine', component: MedicinePageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
