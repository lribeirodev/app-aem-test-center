import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "home",
    component: PagesComponent,
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule),
  },
  {
    path: "logged",
    component: PagesComponent,
    loadChildren: () => import("./logged/logged.module").then(m => m.LoggedModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: 'home',
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule],
})
export class PagesRoutingModule {}
