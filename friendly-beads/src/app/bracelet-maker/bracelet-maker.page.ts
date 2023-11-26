import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bracelet-maker',
  templateUrl: './bracelet-maker.page.html',
  styleUrls: ['./bracelet-maker.page.scss'],
})
export class BraceletMakerPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void{
    const user = localStorage.getItem('User')
    if(user==null){
      this.router.navigateByUrl('/signin')
    }
  }

}
