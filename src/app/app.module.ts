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
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { DragDropModule } from '@angular/cdk/drag-drop';
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
import { MedicineDetailComponent } from './medicine-detail/medicine-detail.component';
import { ImageBoxComponent } from './medicine-detail/image-box/image-box.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { PopUpComponent } from './pop-up/pop-up/pop-up.component';
import { PharmacyDashListingsAddComponent } from './dashboards/pharmacy-dashboard/pharmacy-dash-listings/pharmacy-dash-listings-add/pharmacy-dash-listings-add.component';
import { ConfirmationDialogComponent } from './pop-up/confirmation-dialog/confirmation-dialog.component';
import { CustomerDashboardComponent } from './dashboards/customer-dashboard/customer-dashboard.component';
import { CustomerDashHomeComponent } from './dashboards/customer-dashboard/customer-dash-home/customer-dash-home.component';
import { CustomerDashOrdersComponent } from './dashboards/customer-dashboard/customer-dash-orders/customer-dash-orders.component';

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
    PharmacyDashListingsComponent,
    MedicineDetailComponent,
    ImageBoxComponent,
    PrescriptionComponent,
    PopUpComponent,
    PharmacyDashListingsAddComponent,
    ConfirmationDialogComponent,
    CustomerDashboardComponent,
    CustomerDashHomeComponent,
    CustomerDashOrdersComponent
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
    MatSelectModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
