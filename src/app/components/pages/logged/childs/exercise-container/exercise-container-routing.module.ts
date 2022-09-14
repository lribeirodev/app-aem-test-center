import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseContainerComponent } from './exercise-container.component';

const routes: Routes = [
  {
    path: '',
    component: ExerciseContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseContainerRoutingModule { }
