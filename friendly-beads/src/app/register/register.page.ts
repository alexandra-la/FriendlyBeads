import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  //@ts-ignore
  email: string
   //@ts-ignore
  username: string
   //@ts-ignore
  password: string
  constructor(private navCtrl: NavController, public Registerservice: RegisterService) { }

  ngOnInit() {
  }
  goToSignIn(){
    this.navCtrl.navigateForward('signin')
  }
  register(){
    this.Registerservice.signup(this.email, this.password)}
}
