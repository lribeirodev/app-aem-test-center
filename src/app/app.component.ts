import { Component, OnInit } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AppTestCenterAEM';
  private app!: FirebaseApp;

  ngOnInit(): void {
    this.app = initializeApp(environment.firebaseConfig);
  }

}
