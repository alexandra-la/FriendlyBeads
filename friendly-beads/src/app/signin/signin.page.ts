import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { SigninPageForm } from './signin.page.form';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
 //@ts-ignore
  form: FormGroup;
  //@ts-ignore
  email: string;
  //@ts-ignore
  password: string;

  constructor(private http: HttpClient, private navCtrl: NavController, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = new SigninPageForm(this.formBuilder).createForm();
  }
  //Navigate to Register page
  goToRegister(){
    this.navCtrl.navigateForward('register')
  }

  gotToHome(){
    this.navCtrl.navigateForward('home')
  }
  login(){
    let credentials = {
      email: this.email,
      password: this.password
    }


    console.log(credentials)
  }

}
