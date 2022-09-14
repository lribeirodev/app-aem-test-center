import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GuardService } from "../../core/services/guard.service";
import { LoggedComponent } from "./logged.component";

const routes : Routes = [
  {
    path: "",
    component: LoggedComponent,
  },
  {
    path: "exercises",
    canActivate: [GuardService],
    loadChildren: () => import("./childs/exercise-container/exercise-container.module")
    .then(m => m.ExerciseContainerModule)
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class LoggedRoutingModule {}
