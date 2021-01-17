import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { TableLineComponent } from './components/table-line/table-line.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';
import { OffersViewComponent } from './views/offers-view/offers-view.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { SingleOfferViewComponent } from './views/single-offer-view/single-offer-view.component';
import { AddOfferViewComponent } from './views/add-offer-view/add-offer-view.component';
import { EditOfferViewComponent } from './views/edit-offer-view/edit-offer-view.component';
import { ProfileViewComponent } from './views/profile-view/profile-view.component';
import {AuthService} from './services/auth/auth.service';
import {OffersService} from './services/offers/offers.service';
import {UserService} from './services/user/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    TableLineComponent,
    NotFoundViewComponent,
    OffersViewComponent,
    AuthViewComponent,
    SingleOfferViewComponent,
    AddOfferViewComponent,
    EditOfferViewComponent,
    ProfileViewComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, OffersService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
