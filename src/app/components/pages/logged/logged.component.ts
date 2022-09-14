import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  getAuth,
  signInWithEmailLink,
} from 'firebase/auth';
import { Const } from '../../core/constants/constants';
import { AuthService } from '../../core/services/auth.service';

@Component({
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss'],
})
export class LoggedComponent implements OnInit {
  loading : boolean = true;
  email!: string;
  constructor(private router: Router, private service: AuthService,) {}

  ngOnInit(): void {
    this.initConfig();
  }

  public initTest(): void{
    this.router.navigate(["/logged/exercises"]);
  }

  private async initConfig() {

    let cookie = document.cookie;

    this.service.createObserVableCheckAuth()
    .subscribe(async (auth) => {
      if (auth) {
        this.email = window.localStorage.getItem(Const.EMAIL_FROM_SESSION_STORAGE)!;
        const emailLink = window.location.href;

        if(!auth.currentUser){
          await this.loginWithEmailLink(auth, emailLink, this.email);
        } else {
          await this.checkEmailUserVerified(auth);
          await this.checkCookie(auth, cookie);
        }
      }
    });
  }

  private async loginWithEmailLink(auth: Auth, emailLink: string, email: string): Promise<any> {
      signInWithEmailLink(auth, email, emailLink)
      .then((r) => {
        let time = new Date();
        let minutes = 60;
        time.setTime(time.getTime() + minutes * 60 * 1000);
        time.getUTCDate();
        r.user
          .getIdTokenResult()
          .then(
            (token) => {
              let date = new Date();
              let time = date.getTime() * 60 * 60 * 1000;
              date.setTime(time);
              document.cookie = `token=${token.token};expires=${token.expirationTime};path=/`;
              this.loading = false;
            });
      })
      .catch(e => {
        this.returnToHomePage();
      });
  }

  private async checkCookie(auth: Auth, cookie: string): Promise<any> {
    getAuth();
    if(cookie.includes('token')){
      await auth.currentUser?.getIdTokenResult()
      .then(token => {
        let tokenCookie = cookie.substring(cookie.indexOf('=')+1, cookie.length);
        if(tokenCookie !== token.token) this.returnToHomePage();
      });
    } else {
        auth.currentUser?.getIdTokenResult()
        .then(token => {
          document.cookie = `token=${token.token};expires=${token.expirationTime};path=/`;
          this.loading = false;
        })
    }
  }

  private checkEmailUserVerified(auth: Auth): void{
    if(auth.currentUser?.emailVerified){
      this.loading = false;
      return;
    }

    this.returnToHomePage();
  }

  private returnToHomePage(): void{
    this.router.navigate(['/home']);
  }
}
