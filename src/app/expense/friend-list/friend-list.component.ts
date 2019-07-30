import { Component, OnInit } from '@angular/core';


import { UserService } from 'src/app/services/user.service';
import { ExpenseListService } from '../expense-list/expense-list.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  
  firstname:string[]=[];
 
   flag=true;
   friendlist:string[]=[]
   userfname:string;
   userid:string;
    constructor(private userservice:UserService,private expenselistservice:ExpenseListService) { }
  
  ngOnInit() {

    this.userservice.currentname.subscribe(name=> this.userfname=name)
    
  //   // this.expenselistservice.addfriendtolist(this.userfname);
  //   // this.expenselistservice.friendlistchanged.subscribe((data: string[])=>{
  //   //  this.friendlist=data;
    
  // })

    this.userservice.getUsers().subscribe((data) =>
      {
        console.log(data.length);
        for(let i=0;i<data.length;i++){
          this.firstname[i]=data[i]["firstName"]
          
        }
        
        
      }


    );
    
   
  }


  onaddtolist(name: string){
    
        this.flag=true
       
          this.friendlist.forEach((element) => {
             
              if(element===name){
                console.log(this.flag)
                
                alert("User is already added to list")
                this.flag=false
                console.log(this.flag)
                
              
              }
              
               
              
             
          })
          if(this.flag==true){
            this.expenselistservice.addfriendtolist(name);
            this.expenselistservice.friendlistchanged.subscribe((data: string[])=>{
             this.friendlist=data;
            
          })
         }
             
          
          
      
                
      }
  


}
