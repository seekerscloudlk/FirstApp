import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashBoardComponent} from './components/dash-board/dash-board.component';
import {LoginFormComponent} from './components/login-form/login-form.component';

const routes: Routes = [
  // www.example.com (localhost:4200/DashBoard)
  {path: '', component: LoginFormComponent},
  {path: 'DashBoard', component: DashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
