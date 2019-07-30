import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';


// @Injectable({
//   providedIn: 'root'
// })
export class UserService {

  userid:string;
  userfname:string;
  islogin:boolean;
  namesharing=new BehaviorSubject(this.userfname)
  currentname=this.namesharing.asObservable();

  
  constructor(private http: HttpClient,private router:Router) {


  }

  getUsers(): any {
    return this.http.get('http://localhost:8080/api/getusers', { responseType: 'json' })
  }


  authenticateuser(email: string, password: string) {
    
    
    this.http.post<any>('http://localhost:8080/api/afterlogin', { email: email, password: password }).subscribe((resdata) => {
                
            

      if (resdata) {
        this.islogin=true
      
          // this.loading=false;
          // console.log(resdata);
          localStorage.setItem('token',resdata.token)
        let tokeninfo= this.getDecodedAccessToken(resdata.token)
        this.userid=tokeninfo.subject
        this.userfname=tokeninfo.fname
        this.namesharing.next(this.userfname);
        this.router.navigate(["/expense"])
        console.log(this.userfname)
          // this.router.navigate(['/expense'])
      } else {
            this.islogin=false;
          // this.loading=false;
          alert("Login Failed!")
      }

  }, (err) => {
      this.islogin=false;
      alert("Login Failed!")
      console.log(err);
  }

  );


    

  }
  getToken() {
    return localStorage.getItem('token')
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('token');
      
  }



}