import { Component, Input, OnInit } from '@angular/core';
import { IScore } from 'src/app/components/core/interfaces/score';
import { ScoreService } from 'src/app/components/core/services/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  scores : IScore[] = [];
  @Input() showFinalResult : boolean = false;

  constructor(private scoreService : ScoreService){}

  ngOnInit(): void {
    this.scoreService.getScore().subscribe(scores => {
      this.scores = scores;
    });
  }

  public reset(): void {
    window.location.reload();
  }

  public getLetter(a: any[]){
    let letters = ["A", "B", "C", "D", "E"];
    return a.map(value => letters[value]).join(", ");
  }

  private getResults() : boolean[]{
    return this.scores.map(item => {
      if(item.answerFromUser.length === item.rightAnswer.length){
        return item.answerFromUser.every((value, index) => value === item.rightAnswer[index]);
      };
      return false;
    });
    }

  private getCalcPoints(bool : boolean) : number {
    let value = 0;
    for(let r of this.getResults()){
      value += r === bool ? 1 : 0;
    };
    return value;
  }

  get acertos() : number {
    return this.getCalcPoints(true);
  }

  get erros() : number {
    return this.getCalcPoints(false);
  }

}
