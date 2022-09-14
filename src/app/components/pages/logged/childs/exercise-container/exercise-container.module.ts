import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseContainerRoutingModule } from './exercise-container-routing.module';
import { ExerciseContainerComponent } from './exercise-container.component';
import { ExerciseItemComponent } from './exercise-item/exercise-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/components/core/pipes/pipes.module';
import { ScoreComponent } from './score/score.component';
import { ScoreService } from 'src/app/components/core/services/score.service';


@NgModule({
  declarations: [
    ExerciseContainerComponent,
    ExerciseItemComponent,
    ScoreComponent,
  ],
  imports: [
    CommonModule,
    ExerciseContainerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
  ],
  providers: [
    ScoreService,
  ]
})
export class ExerciseContainerModule { }
