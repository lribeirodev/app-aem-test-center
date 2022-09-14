import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: any, ...args: any[]) {
    switch (typeof value) {
      case 'string':
        return this.domSanitizer.bypassSecurityTrustHtml(value);
      case 'object':
        let result = value.reduce((p: any, c: any) => p + '<br/>' + c);
        return this.domSanitizer.bypassSecurityTrustHtml(result);
      default:
        return value;
    }
  }
}
