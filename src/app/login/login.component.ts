import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert:boolean=false;
  email:string='';
   password:string='';
   constructor(private router:Router){}
  ngOnInit(): void {
  }

 
OnLogin(){
if(this.email=="shubham" && this.password=="shu" )
  { 
    this.router.navigate(['/myrequest']);
  }
  else
  {
     alert("please enter valid deatails") ;
} 
} 
}