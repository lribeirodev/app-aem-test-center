import { Component, OnInit, ViewChild } from '@angular/core';
import { Question } from 'src/app/components/core/interfaces/question';
import { ScoreService } from 'src/app/components/core/services/score.service';
import { ExerciseItemComponent } from './exercise-item/exercise-item.component';

@Component({
  selector: 'app-exercise-container',
  templateUrl: './exercise-container.component.html',
  styleUrls: ['./exercise-container.component.scss']
})
export class ExerciseContainerComponent implements OnInit {

  @ViewChild(ExerciseItemComponent)
  exerciseItem!: ExerciseItemComponent;
  tempFeedBack: any;
  showFinalResult : boolean = false;
  questions: Question[] = [];
  question!: Question | undefined;
  isNextButtonDisabled: boolean = true;
  isPreviousButtonDisabled: boolean = true;
  indexControl : any = {
    startPosition: 0,
    index: 0,
  };

  constructor(private scoreService: ScoreService){}

  ngOnInit(): void {
    this.scoreService.startObservable();
    fetch("./assets/json/exercises.json")
    .then(data => data.json())
    .then(questions => {
      this.questions = questions.map((value: Question, index: number) => {
        value.id = index;
        return value;
      });
      console.log(this.questions);
      this.question = this.questions[this.indexControl.startPosition];
    });
  }

  receiveEventToEnableNextButton(feedback: any){
    this.indexControl.index = feedback.id;
    this.isNextButtonDisabled = false;
    this.isPreviousButtonDisabled = !feedback.canGoPrevious;
    this.tempFeedBack = feedback;
  }

  next(): void{
    this.question = this.questions[this.nextCheckPosition()];
    if(typeof(this.question) === 'undefined'){
      this.showFinalResult = true;
    }
    this.exerciseItem.resetAnswer();
    this.isNextButtonDisabled = true;
    this.scoreService.addScore(this.tempFeedBack);
  }

  previous(): void{
    this.question = this.questions[this.previousCheckPosition()];
  }

  private nextCheckPosition(): number {
    return this.indexControl.index <= this.questions.length ? this.indexControl.index += 1 : this.questions.length - 1;
  }

  private previousCheckPosition(): number {
    return this.indexControl.index >= 1 ? this.indexControl.index - 1 : 0 ;
  }

}
