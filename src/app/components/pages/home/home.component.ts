import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Auth, getAuth, isSignInWithEmailLink } from "@firebase/auth";
import { AuthService } from "../../core/services/auth.service";

@Component({
  templateUrl: "./home.component.html",
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  constructor(private router: Router, private auth: AuthService){}
  ngOnInit(): void {
    this.checkCookie();
  }

  private checkCookie(): void{
    this.auth.createObserVableCheckAuth()
    .subscribe(auth => {
      if(auth){
        auth.currentUser!.getIdToken()
        .then(token => {
          let cookie = document.cookie;
          let tokenCookie = cookie.substring(cookie.indexOf("=")+1,cookie.length);
          if(token === tokenCookie) this.router.navigate(["/logged"]);
        });
      }
    })
  }
}
