import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';


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
  constructor(private http:HttpClient, private router: Router, private fireauth: AngularFireAuth) { }

 /* register(Uemail:string, Uusername: string,Upassword:string){
    let user = {
      email: Uemail,
      username: Uusername,
      password: Upassword
    }
    this.http.post('http://localhost:3000/users/register',user).subscribe(res =>{
      this.router.navigateByUrl('signin',{replaceUrl: true})})

    console.log(user)
  }*/
  signup(Uemail: string, Upassword: string) {
    this.fireauth
    .createUserWithEmailAndPassword(Uemail, Upassword)
      .then(res => {
        if (res.user) {
          console.log(res.user);
          this.router.navigateByUrl('signin',{replaceUrl: true})
        }
      })
      .catch(err => {
        console.log(`login failed ${err}`);
        const error = err.message;
      });
  }
}
