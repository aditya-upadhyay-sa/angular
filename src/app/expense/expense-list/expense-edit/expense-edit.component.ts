import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ExpenseData } from 'src/app/shared/models/expensedata.model';
import { ExpenseListService } from '../expense-list.service';

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css']
})
export class ExpenseEditComponent implements OnInit {


  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editeddataIndex: number;
  checkforbtn=true;
  editeddata:ExpenseData ;
  constructor(private expenseservice:ExpenseListService) { }

  ngOnInit() {

    this.subscription = this.expenseservice.startedEditing
      .subscribe(
        (index: number) => {
          this.editeddataIndex = index;
          this.editMode = true;
          this.editeddata = this.expenseservice.getExpense(index);
          this.slForm.setValue({
            expensename: this.editeddata.expensename,
            expenseamount: this.editeddata.amount,
            
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newExpense = new ExpenseData(value.expensename, value.expenseamount);
   
    if (this.editMode) {
      this.expenseservice.updateexpense(this.editeddataIndex, newExpense);
    } else {
      
      this.expenseservice.addexpense(newExpense);
    }
    this.editMode = false;
    form.reset();
  }

  isadd(){
      this.checkforbtn=false
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.expenseservice.deleteexpense(this.editeddataIndex);
    this.onClear();
  }
  

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
