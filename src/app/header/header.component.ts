import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../shared/models/users.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
   username:string;
   constructor(private userservice:UserService,private router:Router) {

   
    }

  ngOnInit() {
    
   
  }
  
  
   
  logout() {
    this.userservice.logout();
    this.router.navigate(['/login']);
}
}
