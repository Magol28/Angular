import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent  {

  forma: FormGroup;
  user: Object = {
    nombrecompleto: {
      nombre: 'miguel',
      apellido: 'guaño'
     },
     correo : 'magol@hotmail.es',
     pasatiempos: ['correr', 'dormir', 'comer']
  };
  constructor() {
    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required
          , Validators.minLength(3)]),
      'apellido': new FormControl('', [Validators.required,
                                      this.nomiguel])
      }),
      'correo': new FormControl('', [Validators.required,
                                      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                    ]),
      'pasatiempos': new FormArray([
        new FormControl('correr', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.isvalid),
      'pass1':  new FormControl('', Validators.required),
      'pass2':  new FormControl('', Validators.required)
    });
  //  this.forma.setValue(this.user);
  this.forma.controls['pass2'].setValidators([Validators.required, this.noigual.bind(this.forma)]);
 /* this.forma.valueChanges.subscribe(data => {
    console.log(data);
  });*/
  this.forma.controls['username'].valueChanges.subscribe(data => {
    console.log(data);
  });

  this.forma.controls['username'].statusChanges.subscribe(data => {
    console.log(data);
  });
   }

   guardarCambios() {
     console.log(this.forma);
     console.log(this.forma.value);
    // this.forma.reset(this.user);
     // this.forma.controls['corre'].setValue('hola@como.con'):
   }
   agregar() {

    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('dormir', Validators.required)
    );
   }

   nomiguel(control: FormControl): {[s: string]: boolean} {

    if (control.value === 'miguel') {
      return {
        noigual: true
      };
    }
   }

   noigual(control: FormControl): {[s: string]: boolean} {
     const forma: any = this;
     console.log(control.value);
     console.log(forma.controls['pass1'].value);
    if (control.value !== forma.controls['pass1'].value) {
      return {
        noigual: true
      };
    }
  }

  isvalid(control: FormControl): Promise<any>| Observable <any> {

    const promesa = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'mago') {
            resolve({existe: true});

           }  else {
             resolve(null);
           }
        }, 3000);
      }
    );
    return promesa;
  }


}
