import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { SigninPageForm } from './signin.page.form';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
 //@ts-ignore
  form: FormGroup;

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = new SigninPageForm(this.formBuilder).createForm();
  }
  //Navigate to Register page
  goToRegister(){
    this.navCtrl.navigateForward('register')
  }

  login(){
    this.navCtrl.navigateForward('account');
  }
}
