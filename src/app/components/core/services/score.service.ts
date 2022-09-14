import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IScore } from "../interfaces/score";

@Injectable({
  providedIn: 'root',
})
export class ScoreService {

  private score : IScore[] = [];
  private scoreObservable! : Observable<IScore[]>;

  public startObservable() : void {
    this.scoreObservable = new Observable<IScore[]>(obs => {
      function repeat(s : IScore[]) {
        setTimeout(() => {
          obs.next(s);
          repeat(s);
        },1000);
      }
      repeat(this.score);
    });
  };

  public getScore(): Observable<IScore[]> {
    return this.scoreObservable;
  }

  public addScore(feedback : IScore){
    this.score.splice(feedback.id,1,feedback);
  }

}
