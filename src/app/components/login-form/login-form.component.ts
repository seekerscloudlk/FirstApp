import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  ngOnInit(): void {

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

  /* showMyData() {
     alert(
       'User Name: ' + this.userName +
       '\nPassword: ' + this.password

     );
   }*/


  accessDashBoard(){
    // Angular Routing
    // --------------
  }

}
