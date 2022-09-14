import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthService } from "../../core/services/auth.service";
import { LoggedRoutingModule } from "./logged-routing.module";
import { LoggedComponent } from "./logged.component";
import { RouterModule } from "@angular/router";
import { GuardService } from "../../core/services/guard.service";

@NgModule({
  declarations: [
    LoggedComponent,
  ],
  imports: [
    LoggedRoutingModule,
    CommonModule,
    RouterModule,
  ],
  providers: [
    AuthService,
    GuardService,
  ]
})
export class LoggedModule {}
