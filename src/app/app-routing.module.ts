import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashBoardComponent} from './components/dash-board/dash-board.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {DefaultPageComponent} from './components/dash-board/pages/default-page/default-page.component';
import {RegisterHotelPageComponent} from './components/dash-board/pages/register-hotel-page/register-hotel-page.component';
import {ManageRoomPageComponent} from './components/dash-board/pages/manage-room-page/manage-room-page.component';
import {ManageReservationComponent} from './components/dash-board/pages/manage-reservation/manage-reservation.component';
import {ReviewsPageComponent} from './components/dash-board/pages/reviews-page/reviews-page.component';
import {SignOutPageComponent} from './components/dash-board/pages/sign-out-page/sign-out-page.component';
import {DefaultMainPageComponent} from './components/default-main-page/default-main-page.component';
import {ResultPageComponent} from './components/result-page/result-page.component';
import {UniqueResultPageComponent} from './components/unique-result-page/unique-result-page.component';

const routes: Routes = [
  // www.example.com (localhost:4200/DashBoard)
  {path: '', component: DefaultMainPageComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'result-page', component: ResultPageComponent},
  {path: 'unique-result-page', component: UniqueResultPageComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'DashBoard', component: DashBoardComponent, children: [
      // www.example.com (localhost:4200/DashBoard/registerHotel)
      {path: '' , component: DefaultPageComponent},
      {path: 'registerHotel' , component: RegisterHotelPageComponent},
      {path: 'manageRooms' , component: ManageRoomPageComponent},
      {path: 'manageReservation' , component: ManageReservationComponent},
      {path: 'reviews' , component: ReviewsPageComponent},
      {path: 'logout' , component: SignOutPageComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
