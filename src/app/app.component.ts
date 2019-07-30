import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { SignupService } from './services/signup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'splitapp';
  
  
  constructor(private userdata:UserService,private signupservice:SignupService){

  }
  ngOnInit(){

    
  }
}
