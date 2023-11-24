import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
   //@ts-ignore
  email: string
   //@ts-ignore
  username: string
   //@ts-ignore
  password: string
  constructor(private http:HttpClient, private router: Router) { }

  register(Uemail:string, Uusername: string,Upassword:string){
    let user = {
      email: Uemail,
      username: Uusername,
      password: Upassword
    }
    this.http.post('http://localhost:3000/users/register',user).subscribe(res =>{
      this.router.navigateByUrl('signin',{replaceUrl: true})})

    console.log(user)
  }
}
