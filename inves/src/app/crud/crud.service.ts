import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Headers,  RequestOptions } from '@angular/http';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(private crud: HttpClient) { }
  public  obtener( id: number): any {
    // tslint:disable-next-line:max-line-length
    const ordeJson =   this.crud.get('http://192.168.137.1:8080/Investigacion/webresources/Persona/' + id);
     return ordeJson;
  }
  public  insertar( datos: Persona) {
    console.log('hola');
  // tslint:disable-next-line:max-line-length
  this.crud.post('http://192.168.137.1:8080/Investigacion/webresources/Persona', JSON.stringify(datos), { 'headers': {'Content-Type': 'application/json'}}).subscribe( data => {
console.log(data);
  });
  }

  public  modificar( datos: Persona): any {
    // tslint:disable-next-line:max-line-length
    const ordeJson = this.crud.put('http://192.168.137.1:8080/Investigacion/webresources/Persona', JSON.stringify(datos), { 'headers': {'Content-Type': 'application/json'}});
    return ordeJson;
  }
  public  eliminar( id: number): any {
    // tslint:disable-next-line:max-line-length
    const ordeJson =  this.crud.delete('http://192.168.137.1:8080/Investigacion/webresources/Persona/' + id);
    return ordeJson;
  }
}
