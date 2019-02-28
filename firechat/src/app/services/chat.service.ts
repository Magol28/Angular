import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../interface/mensaje.interface';
import { map, reduce } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})

export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje [] = [];
  public Usuario: any = { };
  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      console.log(user);
      if (!user) { return; }
      this.Usuario.nombre = user.displayName;
      this.Usuario.uid = user.uid;
    });
  }
  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy( 'fecha', 'desc').limit(5) ) ;
   return this.itemsCollection.valueChanges()
   .pipe(map( (mensaje: Mensaje[]) => {
                this.chats = [];
                for ( const msg of mensaje) {
                  this.chats.unshift(msg);
                }
               }));
  }

  agregarmensaje(texto: string) {
    const menasje: Mensaje = {
      nombre: this.Usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.Usuario.uid

    };
    return  this.itemsCollection.add(menasje);
  }
  login(text: string) {
    if (text === 'google') {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    } else {
      this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
    }
  }
  logout() {
    this.Usuario.nombre = {};
      this.Usuario.uid = {};
    this.afAuth.auth.signOut();
  }
}
