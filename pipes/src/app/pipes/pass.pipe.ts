import { Pipe, PipeTransform } from '@angular/core';
import { store } from '@angular/core/src/render3/instructions';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Pipe({
  name: 'pass'
})
export class PassPipe implements PipeTransform {

  transform(value: string, pass: boolean): any {
   let salida = '';
   if (pass) {
     const i = value.length;
    for (let j = 0; j < i; j++) {
      salida += '*';
    }
    return salida;
   } else {
     return value;
   }
  }

}
