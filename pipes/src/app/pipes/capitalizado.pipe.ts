import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CatitalizadoPipe implements PipeTransform {
    transform(value: string, ...args: any[]): string {
       console.log(value);
       value = value.toLocaleLowerCase();
       const nombres = value.split(' ');
       // tslint:disable-next-line:forin
       for (const i in nombres) {
           nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substring(1);
       }
        return nombres.join(' ');
    }
}
