import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router : Router, private auth : AngularFireAuth) { }

  ngOnInit() {
  }

  signup(){
    this.router.navigateByUrl('/signup');
  }

  logout(){
    this.auth.auth.signOut().then(()=>{
      this.router.navigateByUrl('/login');
    })
  }

}
