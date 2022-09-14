import { Component, HostListener, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { environment } from "src/environments/environment";
import { Const } from "../../core/constants/constants";

enum STEP {
  LOADING,
  SIGN_UP,
  EMAIL_SENT,
}

@Component({
  selector: "app-lock-screen",
  templateUrl: "./lock-screen.component.html",
  styleUrls: ["./lock-screen.component.scss"],
})
export class LockScreenComponent implements OnInit {

  private step : STEP = STEP.SIGN_UP;
  private actionCodeSettings = {
    url: `http://${environment.host}:4200/logged`,
    handleCodeInApp: true,
  };

  public formGroup!: FormGroup;
  public warning: boolean = false;
  public loading : boolean = false;
  public messageHeader = "Digite seu nome.sobrenome para receber o acesso";
  public messageWarningPlaceHolder = "digite nome.sobrenome";

  constructor(private router: Router){}

  ngOnInit(): void {
    this.initConfig();
  }

  public clickEventInputEmail(): void {
    if(this.warning){
      this.disableWarning();
    }
  }

  public signUpWithEmail(): void {

    const auth = getAuth();

    sendSignInLinkToEmail(auth, this.getEmailDomain(), this.actionCodeSettings)
    .then(() => {
      this.disableWarning();
      this.enableLoading();
      this.changeStep(STEP.LOADING);
      window.localStorage.setItem(Const.EMAIL_FROM_SESSION_STORAGE, this.getEmailDomain());
    })
    .catch(error => {
      this.changeStep(STEP.SIGN_UP);
      this.enableWarning();
    });
  }

  public isLoadingStep(): boolean {
    return this.step === STEP.LOADING;
  }

  public isSignUpStep(): boolean {
    return this.step === STEP.SIGN_UP;
  }

  public isEmailSentStep(): boolean {
    return this.step === STEP.EMAIL_SENT;
  }

  public isAlreadyLogged(): boolean {
    return !!window.localStorage.getItem(Const.EMAIL_FROM_SESSION_STORAGE);
  }

  public alreadyLogged(): void{
    this.router.navigate(["/logged"])
  }

  @HostListener('window:keyup', ['$event'])
  private keyEventRequestAccess(event: KeyboardEvent): void {
    if(event.key === "Enter"){
      this.signUpWithEmail();
    }
  }

  private getEmail(): AbstractControl {
    return this.formGroup.get('email')!;
  }

  private getEmailDomain(): string {
    return this.getEmail().value !== null ? `${this.getEmail().value}@${environment.acceptDomain}` : "null";
  }

  private initConfig(): void{
    this.formGroup = new FormGroup({
      email : new FormControl(),
    });
    this.changeStep(STEP.SIGN_UP);
  }

  private changeStep(step: STEP): void{
    this.step = step;
  }

  private enableLoading(): void {
    this.loading = true;
    this.disableLoading();
  }

  private disableLoading(): void {
    setTimeout(() => {
      this.loading = false;
      this.changeStep(STEP.EMAIL_SENT);
    }, 2000);
  }

  private enableWarning(): void {
    this.warning = true;
  }

  private disableWarning(): void {
    this.warning = false;
  }
}
