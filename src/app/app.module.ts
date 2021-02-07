import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DefaultPageComponent } from './components/dash-board/pages/default-page/default-page.component';
import { RegisterHotelPageComponent } from './components/dash-board/pages/register-hotel-page/register-hotel-page.component';
import { CardsComponent } from './components/dash-board/pages/default-page/items/cards/cards.component';
import { ManageRoomPageComponent } from './components/dash-board/pages/manage-room-page/manage-room-page.component';
import { ManageReservationComponent } from './components/dash-board/pages/manage-reservation/manage-reservation.component';
import { ReviewsPageComponent } from './components/dash-board/pages/reviews-page/reviews-page.component';
import { SignOutPageComponent } from './components/dash-board/pages/sign-out-page/sign-out-page.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DefaultMainPageComponent } from './components/default-main-page/default-main-page.component';
import { ResultPageComponent } from './components/result-page/result-page.component';
import { UniqueResultPageComponent } from './components/unique-result-page/unique-result-page.component';



@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    LoginFormComponent,
    HeaderComponent,
    FooterComponent,
    DefaultPageComponent,
    RegisterHotelPageComponent,
    CardsComponent,
    ManageRoomPageComponent,
    ManageReservationComponent,
    ReviewsPageComponent,
    SignOutPageComponent,
    DefaultMainPageComponent,
    ResultPageComponent,
    UniqueResultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
