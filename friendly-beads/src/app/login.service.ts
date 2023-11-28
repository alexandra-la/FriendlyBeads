import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //@ts-ignore
  email: string
  //@ts-ignore
  password: string
  //@ts-ignore
  public routeFrom: any;

  constructor(private http:HttpClient, private router: Router, private fireauth: AngularFireAuth) {}
  /*login(Uemail:string, Upassword:string){
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
  } */
  login(Uemail: string, Upassword: string, route:any) {
    this.fireauth.signInWithEmailAndPassword(Uemail, Upassword)
      .then(res => {
        if (res.user) {
          console.log(res.user);
          if(route=="account"){
            this.router.navigateByUrl('account',{replaceUrl: true})
          }else if(route=="bracelet"){
            this.router.navigateByUrl('bracelet-maker',{replaceUrl: true})
          }
        }
      })
      .catch(err => {
        console.log(`login failed ${err}`);
        const error = err.message;
      });
  }
  changeRoute(routeFrom: any){
    this.routeFrom= routeFrom;
  }

}
