import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //@ts-ignore
  email: string
  //@ts-ignore
  password: string
  constructor(private http:HttpClient, private router: Router) {}
  login(Uemail:string, Upassword:string){
    let credentials = {
      email: Uemail,
      password: Upassword
    }
    this.http.post('http://localhost:3000/users/login',credentials).subscribe(res =>{
      localStorage.setItem('User',JSON.stringify(res))
      this.router.navigateByUrl('account',{replaceUrl: true})
    }, error=>{
      console.log(error)
    })

    console.log(credentials)
  }
}
