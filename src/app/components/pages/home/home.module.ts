import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthService } from "../../core/services/auth.service";
import { LockScreenModule } from "../../shared/lock-screen/lock-screen.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    LockScreenModule,
    RouterModule,
  ],
  providers: [
    AuthService,
  ]
})
export class HomeModule {}
