import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/share/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isloading=false;
  user:User=new User();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.isloading=true;
    const params:Map<string,any>=new Map();
    let usermodel={
      userName:this.user.username,
      email:this.user.email,
      password:this.user.password
    }
    console.log(usermodel)

   // this.router.navigate(['register'])
    // setTimeout(()=>{
    //   this.router.navigate([''])
    // },2000)
    
  }
}
