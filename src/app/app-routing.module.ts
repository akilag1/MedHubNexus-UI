import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';
import { AdminLoginPageComponent } from './login-page/admin-login-page/admin-login-page.component';
import { MedicinePageComponent } from './medicine-page/medicine-page.component';
import { PharmacyPageComponent } from './pharmacy-page/pharmacy-page.component';
import { PharmacyDashboardComponent } from './dashboards/pharmacy-dashboard/pharmacy-dashboard.component';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';
import { PharmacyDashHomeComponent } from './dashboards/pharmacy-dashboard/pharmacy-dash-home/pharmacy-dash-home.component';
import { PharmacyDashOrdersComponent } from './dashboards/pharmacy-dashboard/pharmacy-dash-orders/pharmacy-dash-orders.component';
import { PharmacyDashListingsComponent } from './dashboards/pharmacy-dashboard/pharmacy-dash-listings/pharmacy-dash-listings.component';
import { AdminDashHomeComponent } from './dashboards/admin-dashboard/admin-dash-home/admin-dash-home.component';
import { AdminDashCustomersComponent } from './dashboards/admin-dashboard/admin-dash-customers/admin-dash-customers.component';
import { AdminDashPharmaciesComponent } from './dashboards/admin-dashboard/admin-dash-pharmacies/admin-dash-pharmacies.component';
import { AdminDashRequestsComponent } from './dashboards/admin-dashboard/admin-dash-requests/admin-dash-requests.component';
import { CustomerDashboardComponent } from './dashboards/customer-dashboard/customer-dashboard.component';
import { CustomerDashHomeComponent } from './dashboards/customer-dashboard/customer-dash-home/customer-dash-home.component';
import { CustomerDashOrdersComponent } from './dashboards/customer-dashboard/customer-dash-orders/customer-dash-orders.component';
import {RouteGuardService} from "./services/route-guard.service";

const routes: Routes = [

  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin-login', component: AdminLoginPageComponent },
  { path: 'medicine', component: MedicinePageComponent },
  { path: 'pharmacy', component: PharmacyPageComponent },
  {
    path: 'pharmacy-dashboard', component: PharmacyDashboardComponent, children: [
      { path: '', component: PharmacyDashHomeComponent },
      { path: 'brands', component: PharmacyDashOrdersComponent },
      { path: 'categories', component: PharmacyDashListingsComponent },
      { path: '**', component: PharmacyDashHomeComponent }
    ], canActivate: [RouteGuardService]
  },
  {
    path: 'admin-dashboard', component: AdminDashboardComponent, children: [
      { path: '', component: AdminDashHomeComponent },
      { path: 'customers', component: AdminDashCustomersComponent },
      { path: 'pharmacists', component: AdminDashPharmaciesComponent },
      { path: 'requests', component: AdminDashRequestsComponent },
      { path: 'brands', component: PharmacyDashOrdersComponent },
      { path: 'categories', component: PharmacyDashListingsComponent },
      { path: 'pharmacies', component: PharmacyPageComponent },
      { path: '**', component: AdminDashHomeComponent },
    ], canActivate: [RouteGuardService]
  },
  {
    path: 'customer-dashboard', component: CustomerDashboardComponent, children: [
      { path: '', component: CustomerDashHomeComponent },
      { path: 'orders', component: CustomerDashOrdersComponent },
      { path: '**', component: CustomerDashHomeComponent }
    ], canActivate: [RouteGuardService]
  },
  { path: '**', component: HomePageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
