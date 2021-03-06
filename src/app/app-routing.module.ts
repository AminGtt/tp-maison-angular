import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthViewComponent} from './views/auth-view/auth-view.component';
import {NotFoundViewComponent} from './views/not-found-view/not-found-view.component';
import {AddOfferViewComponent} from './views/add-offer-view/add-offer-view.component';
import {EditOfferViewComponent} from './views/edit-offer-view/edit-offer-view.component';
import {OffersViewComponent} from './views/offers-view/offers-view.component';
import {SingleOfferViewComponent} from './views/single-offer-view/single-offer-view.component';
import {ProfileViewComponent} from './views/profile-view/profile-view.component';
import {AuthGuard} from './services/guard/auth/auth.guard';
import {EditProfileComponent} from './views/edit-profile/edit-profile.component';

const routes: Routes = [
  { path: '', component: AuthViewComponent},
  { path: 'offers', canActivate:[AuthGuard] ,component: OffersViewComponent},
  { path: 'offers/new', canActivate:[AuthGuard], component: AddOfferViewComponent},
  { path: 'offers/edit/:id', canActivate:[AuthGuard], component: EditOfferViewComponent},
  { path: 'offers/:id', canActivate:[AuthGuard], component: SingleOfferViewComponent},
  { path: 'profile', canActivate:[AuthGuard], component: ProfileViewComponent},
  { path: 'profile/edit', canActivate:[AuthGuard], component: EditProfileComponent},
  { path: 'not-found', component: NotFoundViewComponent},
  { path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
