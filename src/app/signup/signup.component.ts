import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService } from '../services/alert.service';
import { SignupService } from '../services/signup.service';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';



@Component({ templateUrl: 'signup.component.html' })
export class SignupComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    subscription: Subscription

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private signupservice: SignupService,
        private userservice: UserService) {

            if(this.userservice.loggedIn())
            {
                this.router.navigate(["/"])
            }
         }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.email, Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        this.loading = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            this.loading=false;
            return;
        }else{
                const firstName=this.registerForm.value.firstName;
                const lastName=this.registerForm.value.lastName;
                const email=this.registerForm.value.email;
                const password=this.registerForm.value.password;
                this.signupservice.AddUser({firstName,lastName,email,password}).subscribe((r) =>{
                    
                if(r){
                    this.loading=false;
                    console.log(r)
                    this.router.navigate(["login"]);
                    //localStorage.setItem('token',r.token);
                    

                }
                
                
              }
                
              ),
              (err)=>
              {
                  
                console.log("error ",err);
              };

        }
       // this.subscription.unsubscribe();

      

       

    }
}
