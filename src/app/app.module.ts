import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';
import { AdminLoginPageComponent } from './login-page/admin-login-page/admin-login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MedicinePageComponent } from './medicine-page/medicine-page.component';
import { PharmacyPageComponent } from './pharmacy-page/pharmacy-page.component';
import { MedicineThumbnailComponent } from './thumbnails/medicine-thumbnail/medicine-thumbnail.component';
import { PharmacyThumbnailComponent } from './thumbnails/pharmacy-thumbnail/pharmacy-thumbnail.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { PharmacyDashboardComponent } from './dashboards/pharmacy-dashboard/pharmacy-dashboard.component';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';
import { UserLoginPageComponent } from './login-page/user-login-page/user-login-page.component';
import { PharmacyDashHomeComponent } from './dashboards/pharmacy-dashboard/pharmacy-dash-home/pharmacy-dash-home.component';
import { PharmacyDashOrdersComponent } from './dashboards/pharmacy-dashboard/pharmacy-dash-orders/pharmacy-dash-orders.component';
import { DashHomeBoxComponent } from './dashboards/common/dash-home-box/dash-home-box.component';
import { AdminDashHomeComponent } from './dashboards/admin-dashboard/admin-dash-home/admin-dash-home.component';
import { AdminDashCustomersComponent } from './dashboards/admin-dashboard/admin-dash-customers/admin-dash-customers.component';
import { AdminDashRequestsComponent } from './dashboards/admin-dashboard/admin-dash-requests/admin-dash-requests.component';
import { AdminDashPharmaciesComponent } from './dashboards/admin-dashboard/admin-dash-pharmacies/admin-dash-pharmacies.component';
import { PharmacyDashListingsComponent } from './dashboards/pharmacy-dashboard/pharmacy-dash-listings/pharmacy-dash-listings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    AboutPageComponent,
    ContactComponent,
    AdminLoginPageComponent,
    MedicinePageComponent,
    PharmacyPageComponent,
    MedicineThumbnailComponent,
    PharmacyThumbnailComponent,
    SearchComponent,
    FilterComponent,
    PharmacyDashboardComponent,
    AdminDashboardComponent,
    UserLoginPageComponent,
    PharmacyDashHomeComponent,
    PharmacyDashOrdersComponent,
    DashHomeBoxComponent,
    AdminDashHomeComponent,
    AdminDashCustomersComponent,
    AdminDashRequestsComponent,
    AdminDashPharmaciesComponent,
    PharmacyDashListingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatListModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
