"use strict";(self.webpackChunkAppTestCenterAEM=self.webpackChunkAppTestCenterAEM||[]).push([[433],{1433:(S,_,c)=>{c.r(_),c.d(_,{ExerciseContainerModule:()=>E});var a=c(9808),m=c(5472),e=c(1223),s=c(2382),l=c(1313),x=c(2313);let h=(()=>{class n{constructor(t){this.domSanitizer=t}transform(t,...o){switch(typeof t){case"string":return this.domSanitizer.bypassSecurityTrustHtml(t);case"object":let i=t.reduce((d,G)=>d+"<br/>"+G);return this.domSanitizer.bypassSecurityTrustHtml(i);default:return t}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(x.H7,16))},n.\u0275pipe=e.Yjl({name:"safeHtml",type:n,pure:!0}),n})();function f(n,r){if(1&n&&(e.TgZ(0,"div",6),e._UZ(1,"input",7)(2,"label",8),e.ALo(3,"safeHtml"),e.qZA()),2&n){const t=e.oxw(),o=t.index,i=t.$implicit;e.xp6(1),e.Q6J("id","question_"+o)("value",o),e.xp6(1),e.Q6J("for","question_"+o)("innerHTML",e.lcZ(3,4,i),e.oJD)}}function g(n,r){if(1&n&&(e.TgZ(0,"div",6),e._UZ(1,"input",9)(2,"label",8),e.ALo(3,"safeHtml"),e.qZA()),2&n){const t=e.oxw(),o=t.index,i=t.$implicit;e.xp6(1),e.MGl("formControlName","alternativeFormControl_",o,"")("name","'alternativeFormControl_",o,""),e.Q6J("id","question_"+o)("value",o),e.xp6(1),e.Q6J("for","question_"+o)("innerHTML",e.lcZ(3,6,i),e.oJD)}}function C(n,r){if(1&n&&(e.ynx(0),e.YNc(1,f,4,6,"div",5),e.YNc(2,g,4,8,"div",5),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.isRadio()),e.xp6(1),e.Q6J("ngIf",t.isCheckbox())}}let u=(()=>{class n{constructor(){this.canGoNext=new e.vpe}ngOnDestroy(){}ngOnChanges(t){this.initOrResetFormConfig()}ngOnInit(){this.initOrResetFormConfig()}resetAnswer(){this.formGroupObservable.unsubscribe(),this.formGroup.reset()}getId(){return`<h3 style="display: inline;">${this.item.id+1}) </h3>`}isRadio(){return l.r.RADIO===this.checkInputType()}isCheckbox(){return l.r.CHECKBOX===this.checkInputType()}initOrResetFormConfig(){this.checkInputType()===l.r.CHECKBOX?this.initFormGroupCheckbox():this.initFormGroupRadio()}initFormGroupCheckbox(){this.formGroup=new s.cw({});for(let t in this.item.alternatives)this.formGroup.addControl(`alternativeFormControl_${t}`,new s.NI(""));this.formGroupObservable=this.formGroup.statusChanges.subscribe(t=>{this.formGroup.valid&&this.sendEventCheckboxFeedback()})}initFormGroupRadio(){this.formGroup=new s.cw({}),this.formGroup.addControl("alternativeFormControl",new s.NI(s.kI.required)),this.formGroupObservable=this.formGroup.statusChanges.subscribe(t=>{this.formGroup.valid&&this.sendEventRadioFeedback()})}checkInputType(){return this.item.answer.length>1?l.r.CHECKBOX:l.r.RADIO}sendEventRadioFeedback(){this.canGoNext.emit({canGonNext:!0,answerFromUser:[this.formGroup.value.alternativeFormControl],rightAnswer:this.item.answer,id:this.item.id})}sendEventCheckboxFeedback(){let t=[],o=0;for(let i in this.formGroup.value)this.formGroup.value[i]&&t.push(o),o++;this.canGoNext.emit({canGonNext:!0,answerFromUser:t,rightAnswer:this.item.answer,id:this.item.id})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-exercise-item"]],inputs:{item:"item"},outputs:{canGoNext:"canGoNext"},features:[e.TTD],decls:6,vars:5,consts:[[1,"exercise-item-component",3,"formGroup"],[1,"exercise-item-component__container"],[1,"exercise-item-component__container__question",3,"innerHTML"],[1,"exercise-item-component__container__alternatives"],[4,"ngFor","ngForOf"],["class","exercise-item-component__container__alternatives__alternative",4,"ngIf"],[1,"exercise-item-component__container__alternatives__alternative"],["formControlName","alternativeFormControl","type","radio","name","alternativeFormControl",3,"id","value"],[3,"for","innerHTML"],["type","checkbox",3,"formControlName","name","id","value"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"div",2),e.ALo(3,"safeHtml"),e.TgZ(4,"div",3),e.YNc(5,C,3,2,"ng-container",4),e.qZA()()()),2&t&&(e.Q6J("formGroup",o.formGroup),e.xp6(2),e.Q6J("innerHTML",e.lcZ(3,3,o.getId()+o.item.question),e.oJD),e.xp6(3),e.Q6J("ngForOf",o.item.alternatives))},directives:[s.JL,s.sg,a.sg,a.O5,s.Fj,s._,s.JJ,s.u,s.Wl],pipes:[h],styles:[".exercise-item-component__container[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;padding:10px;width:90vw}.exercise-item-component__container__question[_ngcontent-%COMP%]{font-size:20px;line-height:1.2em;font-family:Georgia,Times New Roman,Times,serif;padding:10px}.exercise-item-component__container__alternatives[_ngcontent-%COMP%]{display:flex;flex-direction:column}.exercise-item-component__container__alternatives__alternative[_ngcontent-%COMP%]{background-color:#ddd;border-top-right-radius:10px;border-bottom-right-radius:10px;margin:10px;font-size:20px;display:flex;padding:2px}.exercise-item-component__container__alternatives__alternative[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-left:5px}.exercise-item-component__container__alternatives__alternative[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-left:10px;word-break:break-word}.exercise-item-component__container__alternatives__alternative[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{cursor:pointer}"]}),n})();var v=c(8306);let p=(()=>{class n{constructor(){this.score=[]}startObservable(){this.scoreObservable=new v.y(t=>{!function o(i){setTimeout(()=>{t.next(i),o(i)},1e3)}(this.score)})}getScore(){return this.scoreObservable}addScore(t){this.score.splice(t.id,1,t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function b(n,r){if(1&n&&(e.ynx(0),e._uU(1),e._UZ(2,"br"),e._uU(3),e._UZ(4,"br"),e._uU(5),e._UZ(6,"br")(7,"br"),e.BQk()),2&n){const t=r.$implicit,o=r.index,i=e.oxw(2);e.xp6(1),e.hij(" Pergunta N\xba: ",o+1,""),e.xp6(2),e.hij(" Sua Resposta: ",i.getLetter(t.answerFromUser),""),e.xp6(2),e.hij(" Resposta Correta: ",i.getLetter(t.rightAnswer),"")}}function w(n,r){if(1&n&&(e.TgZ(0,"div",7),e.YNc(1,b,8,3,"ng-container",8),e.TgZ(2,"h6"),e._uU(3,"** resultado simplificado, apenas para estudos, as informa\xe7\xf5es e respostas podem variar em uma prova real"),e.qZA()()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.scores)}}let O=(()=>{class n{constructor(t){this.scoreService=t,this.scores=[],this.showFinalResult=!1}ngOnInit(){this.scoreService.getScore().subscribe(t=>{this.scores=t})}reset(){window.location.reload()}getLetter(t){let o=["A","B","C","D","E"];return t.map(i=>o[i]).join(", ")}getResults(){return this.scores.map(t=>t.answerFromUser.length===t.rightAnswer.length&&t.answerFromUser.every((o,i)=>o===t.rightAnswer[i]))}getCalcPoints(t){let o=0;for(let i of this.getResults())o+=i===t?1:0;return o}get acertos(){return this.getCalcPoints(!0)}get erros(){return this.getCalcPoints(!1)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-score"]],inputs:{showFinalResult:"showFinalResult"},decls:10,vars:4,consts:[[1,"score-component"],[1,"score-component__container",3,"ngClass"],[1,"score-component__container__acertos"],[1,"score-component__container__erros"],[1,"score-component__container__button"],[3,"click"],["class","score-component__container__results",4,"ngIf"],[1,"score-component__container__results"],[4,"ngFor","ngForOf"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.qZA(),e.TgZ(4,"div",3),e._uU(5),e.qZA(),e.TgZ(6,"div",4)(7,"a",5),e.NdJ("click",function(){return o.reset()}),e._uU(8,"RESET"),e.qZA()(),e.YNc(9,w,4,1,"div",6),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngClass",o.showFinalResult?"__showFinal":""),e.xp6(2),e.hij(" ACERTOS: ",o.acertos," "),e.xp6(2),e.hij(" ERROS: ",o.erros," "),e.xp6(4),e.Q6J("ngIf",o.showFinalResult))},directives:[a.mk,a.O5,a.sg],styles:[".score-component__container[_ngcontent-%COMP%]{display:flex;font-weight:700;color:#fff}.score-component__container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{padding:10px}.score-component__container.__showFinal[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}@keyframes resultFadeIn{0%{transform:rotateY(90deg)}}.score-component__container.__showFinal[_ngcontent-%COMP%]   .score-component__container__acertos[_ngcontent-%COMP%], .score-component__container.__showFinal[_ngcontent-%COMP%]   .score-component__container__erros[_ngcontent-%COMP%], .score-component__container.__showFinal[_ngcontent-%COMP%]   .score-component__container__button[_ngcontent-%COMP%]{animation:resultFadeIn 5s;width:250px;font-size:30px;border-radius:15px;margin-bottom:10px;display:flex;justify-content:center;align-items:center}.score-component__container__acertos[_ngcontent-%COMP%]{background-color:green;border-top-left-radius:10px}.score-component__container__erros[_ngcontent-%COMP%]{background-color:red;margin-left:1px;border-top-right-radius:10px}.score-component__container__button[_ngcontent-%COMP%]{cursor:pointer}.score-component__container__results[_ngcontent-%COMP%]{height:300px;overflow:scroll;border:3px solid white;width:90vw}"]}),n})();function F(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"app-exercise-item",6),e.NdJ("canGoNext",function(i){return e.CHM(t),e.oxw().receiveEventToEnableNextButton(i)}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("item",t.question)}}function M(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",7)(1,"button",8),e.NdJ("click",function(){return e.CHM(t),e.oxw().next()}),e._uU(2," NEXT "),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("disabled",t.isNextButtonDisabled)}}const P=[{path:"",component:(()=>{class n{constructor(t){this.scoreService=t,this.showFinalResult=!1,this.questions=[],this.isNextButtonDisabled=!0,this.isPreviousButtonDisabled=!0,this.indexControl={startPosition:0,index:0}}ngOnInit(){this.scoreService.startObservable(),fetch("./assets/json/exercises.json").then(t=>t.json()).then(t=>{this.questions=t.map((o,i)=>(o.id=i,o)),console.log(this.questions),this.question=this.questions[this.indexControl.startPosition]})}receiveEventToEnableNextButton(t){this.indexControl.index=t.id,this.isNextButtonDisabled=!1,this.isPreviousButtonDisabled=!t.canGoPrevious,this.tempFeedBack=t}next(){this.question=this.questions[this.nextCheckPosition()],void 0===this.question&&(this.showFinalResult=!0),this.exerciseItem.resetAnswer(),this.isNextButtonDisabled=!0,this.scoreService.addScore(this.tempFeedBack)}previous(){this.question=this.questions[this.previousCheckPosition()]}nextCheckPosition(){return this.indexControl.index<=this.questions.length?this.indexControl.index+=1:this.questions.length-1}previousCheckPosition(){return this.indexControl.index>=1?this.indexControl.index-1:0}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-exercise-container"]],viewQuery:function(t,o){if(1&t&&e.Gf(u,5),2&t){let i;e.iGM(i=e.CRH())&&(o.exerciseItem=i.first)}},decls:6,vars:3,consts:[[1,"exercise-container-component"],[1,"exercise-container-component__container"],[1,"exercise-container-component__container__score"],[3,"showFinalResult"],[3,"item","canGoNext",4,"ngIf"],["class","exercise-container-component__container__control",4,"ngIf"],[3,"item","canGoNext"],[1,"exercise-container-component__container__control"],[3,"disabled","click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"app-score",3),e.qZA(),e.YNc(4,F,1,1,"app-exercise-item",4),e.YNc(5,M,3,1,"div",5),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("showFinalResult",o.showFinalResult),e.xp6(1),e.Q6J("ngIf",o.question),e.xp6(1),e.Q6J("ngIf",!o.showFinalResult))},directives:[O,a.O5,u],styles:[".exercise-container-component[_ngcontent-%COMP%]{background-color:#006cb4;height:200vh;display:flex;flex-direction:column;align-items:center}.exercise-container-component__container[_ngcontent-%COMP%]{margin-top:30px}.exercise-container-component__container__control[_ngcontent-%COMP%]{margin-top:10px;display:flex;justify-content:left;width:90vw;padding-left:10px}@media only screen and (max-width: 800px){.exercise-container-component__container__control[_ngcontent-%COMP%]{flex-direction:column-reverse;padding-left:0}}.exercise-container-component__container__control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#0df;border:3px solid #00ddff;background-color:transparent;padding:10px;width:300px;border-radius:10px;font-weight:700;font-size:20px;cursor:pointer;margin-right:30px;margin-bottom:15px}@media only screen and (max-width: 800px){.exercise-container-component__container__control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:90vw}}.exercise-container-component__container__control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{border-color:#ccc;color:#ccc;cursor:not-allowed}.exercise-container-component__container__control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active:not(:disabled){color:#40b3ff;border:2px solid #40b3ff}"]}),n})()}];let y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[m.Bz.forChild(P)],m.Bz]}),n})(),T=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({}),n})(),E=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[p],imports:[[a.ez,y,s.u5,s.UX,T]]}),n})()}}]);