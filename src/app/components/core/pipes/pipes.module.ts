import { NgModule } from "@angular/core";
import { SafeHtmlPipe } from "./SafeHtmlPipe";

@NgModule({
  declarations:[
    SafeHtmlPipe,
  ],
  exports:
  [
    SafeHtmlPipe,
  ]
})
export class PipesModule {}
