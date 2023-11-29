import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLoginPageComponent } from './login-page/admin-login-page/admin-login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MedicinePageComponent } from './medicine-page/medicine-page.component';
import { PharmacyPageComponent } from './pharmacy-page/pharmacy-page.component';
import { MedicineThumbnailComponent } from './thumbnails/medicine-thumbnail/medicine-thumbnail.component';
import { PharmacyThumbnailComponent } from './thumbnails/pharmacy-thumbnail/pharmacy-thumbnail.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { PharmacyDashboardComponent } from './dashboards/pharmacy-dashboard/pharmacy-dashboard.component';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    AboutPageComponent,
    ContactComponent,
    LoginPageComponent,
    AdminLoginPageComponent,
    MedicinePageComponent,
    PharmacyPageComponent,
    MedicineThumbnailComponent,
    PharmacyThumbnailComponent,
    SearchComponent,
    FilterComponent,
    PharmacyDashboardComponent,
    AdminDashboardComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
