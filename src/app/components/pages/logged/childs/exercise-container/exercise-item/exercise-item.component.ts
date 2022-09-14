import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { INPUT_TYPE } from 'src/app/components/core/constants/constants';
import { Question } from 'src/app/components/core/interfaces/question';

@Component({
  selector: 'app-exercise-item',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.scss'],
})
export class ExerciseItemComponent implements OnInit, OnDestroy, OnChanges {
  @Input() item!: Question;
  @Output() canGoNext = new EventEmitter<any>();
  formGroup!: FormGroup;
  formGroupObservable!: Subscription;

  ngOnDestroy(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.initOrResetFormConfig();
  }

  ngOnInit(): void {
    this.initOrResetFormConfig();
  }

  public resetAnswer(): void {
    this.formGroupObservable.unsubscribe();
    this.formGroup.reset();
  }

  public getId(): string {
    return `<h3 style="display: inline;">${this.item.id + 1}) </h3>`;
  }

  public isRadio(): boolean {
    return INPUT_TYPE.RADIO === this.checkInputType();
  }

  public isCheckbox(): boolean {
    return INPUT_TYPE.CHECKBOX === this.checkInputType();
  }

  private initOrResetFormConfig(): void {
    this.checkInputType() === INPUT_TYPE.CHECKBOX
      ? this.initFormGroupCheckbox()
      : this.initFormGroupRadio();
  }

  private initFormGroupCheckbox(): void {
    this.formGroup = new FormGroup({});
    for (let index in this.item.alternatives) {
      this.formGroup.addControl(
        `alternativeFormControl_${index}`,
        new FormControl(""));
    }

    this.formGroupObservable = this.formGroup.statusChanges.subscribe((_) => {
      if (this.formGroup.valid) {
        this.sendEventCheckboxFeedback();
      }
    });
  }

  private initFormGroupRadio(): void {
    this.formGroup = new FormGroup({});
    this.formGroup.addControl(
      'alternativeFormControl',
      new FormControl(Validators.required)
    );

    this.formGroupObservable = this.formGroup.statusChanges.subscribe((_) => {
      if (this.formGroup.valid) {
        this.sendEventRadioFeedback();
      }
    });
  }

  private checkInputType(): INPUT_TYPE {
    return this.item.answer.length > 1 ? INPUT_TYPE.CHECKBOX : INPUT_TYPE.RADIO;
  }

  private sendEventRadioFeedback(): void {
    this.canGoNext.emit({
      canGonNext: true,
      answerFromUser: [this.formGroup.value.alternativeFormControl],
      rightAnswer: this.item.answer,
      id: this.item.id,
    });
  }

  private sendEventCheckboxFeedback(): void {
    let result = [];
    let cont = 0;
    for (let item in this.formGroup.value) {
      this.formGroup.value[item] ? result.push(cont) : '';
      cont++;
    }

    this.canGoNext.emit({
      canGonNext: true,
      answerFromUser: result,
      rightAnswer: this.item.answer,
      id: this.item.id,
    });
  }
}
