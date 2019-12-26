import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interakcja-komponentow';

  lista: Array<string> = [];

  tabelaZDanymi: Array<string> = ['asfasd', 'asdasd', 'asdsadddddd'];

  pushedUp(event: string) {
    this.lista.push(event);
    console.log(event);
  }
}
