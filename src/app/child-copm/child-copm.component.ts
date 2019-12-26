import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-copm',
  templateUrl: './child-copm.component.html',
  styleUrls: ['./child-copm.component.css']
})
export class ChildCopmComponent implements OnInit {

  @Input()
  tabelaDoUstawieniaJakoPropertyCoponentu: Array<string>;

  // tslint:disable-next-line: no-input-rename
  @Input('jakasNazwaProperty')
  tabelaZbindowanaPoNazwie: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
