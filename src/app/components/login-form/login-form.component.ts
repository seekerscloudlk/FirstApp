import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  /* showMyData() {
     alert(
       'User Name: ' + this.userName +
       '\nPassword: ' + this.password

     );
   }*/

  constructor(private router: Router) {
  }

  accessDashBoard(){
    // Angular Routing
    // --------------
    this.router.navigate(['/DashBoard']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });

  }

  /*title = 'FirstApp';
   userNameFromTs='IJSE@gmail.com';

   printMyName(userName) {
     alert(userName.value);
     // one way data binding
   }

   myCustomVar='';*/
  userName = '';
  password = '';
  ngOnInit(): void {

  }


}
