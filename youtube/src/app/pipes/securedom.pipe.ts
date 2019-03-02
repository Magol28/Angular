import { Pipe, PipeTransform } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Pipe({
  name: 'securedom'
})
export class SecuredomPipe implements PipeTransform {
  constructor( private dom: DomSanitizer) {}

  transform(value: string, url: string): SafeResourceUrl {

    return this.dom.bypassSecurityTrustResourceUrl(url + value);
  }

}
