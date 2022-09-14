import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LockScreenComponent } from "./lock-screen.component";

@NgModule({
  declarations: [
    LockScreenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    LockScreenComponent,
  ],
})
export class LockScreenModule{}
