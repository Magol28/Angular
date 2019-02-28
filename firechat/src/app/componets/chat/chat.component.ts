import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Mensaje } from '../../interface/mensaje.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {
  mensaje = '';
  element: any;
  ngOnInit() {
    setTimeout(() => {
      this.element = document.getElementById('mensaje-app');
    }, 20);
  }

  constructor(public chat: ChatService) {
    this.chat.cargarMensajes().subscribe(() => {
      this.element.scrollTop = this.element.scrollHeight;
    });
  }

  enviarmensaje() {

    if (this.mensaje.length === 0) { return; }
    this.chat.agregarmensaje(this.mensaje);
  }

}
