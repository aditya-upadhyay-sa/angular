import { Component, OnInit, OnDestroy } from '@angular/core';

import { ExpenseListService } from './expense-list.service';
import { Subscription } from 'rxjs';
import { ExpenseData } from 'src/app/shared/models/expensedata.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit,OnDestroy {

  expensedata: ExpenseData[];
  perperson:number[]=[]
  friendlist:string[]=[]
  amountperperson:number;
  userfname:string;
  totalperson:number;
  nameofexpense:string;
  totalamount:number;
  dd:string;
  mm:string;
  todaydate=new Date();
  private subscription: Subscription;

  constructor(private expenseservice: ExpenseListService,private userservice:UserService) { }

  ngOnInit() {
    this.userservice.currentname.subscribe(name=> this.userfname=name)
    
    this.dd = String(this.todaydate.getDate()).padStart(2, '0'); 
    this.mm = String(this.todaydate.getMonth() + 1).padStart(2, '0');
    
    console.log("Date is " + this.dd + "and month is " + this.mm);
    this.expensedata = this.expenseservice.getExpenses();
    this.subscription = this.expenseservice.expenseChanged
      .subscribe(
        (expenses: ExpenseData[]) => {
          
          this.expensedata = expenses;
          this.nameofexpense=this.expensedata[0].expensename
          this.totalamount=this.expensedata[0].amount;
          // console.log(this.perperson[1]=this.expensedata[1].amount/this.expensedata[1].nooffriends)
           
          //  for(let i=0;i<this.friendlist.length;i++){
            
          //    this.perperson[i]=this.expensedata[i].amount/
            
          //  }
          this.totalperson=this.friendlist.length+1
          this.amountperperson=this.expensedata[0].amount/this.totalperson;
            console.log(this.perperson)
          

        }
      );
      this.expenseservice.friendlistchanged.subscribe((data: string[])=>{
        this.friendlist=data;
         console.log(this.friendlist);

      })
  }
  onsavedata(){
    this.expenseservice.savedata({name: this.nameofexpense,amount: this.totalamount,friendlist:this.friendlist,perpersonamount:this.amountperperson,date:this.todaydate})
  }
  
  onEdit(index: number) {
    this.expenseservice.startedEditing.next(index);
  }
  

  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
