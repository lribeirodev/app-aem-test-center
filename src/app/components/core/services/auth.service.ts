import { Injectable } from "@angular/core";
import { Auth, getAuth } from "firebase/auth";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public createObserVableCheckAuth(): Observable<Auth> {
    return new Observable<Auth>((obs) => {
      function repeat(auth: any) {
        setTimeout(() => {
          obs.next(auth);

          if (auth) {
            obs.complete();
          }

          repeat(auth);
        }, 1000);
      }
      repeat(getAuth());
    });
  }
}
