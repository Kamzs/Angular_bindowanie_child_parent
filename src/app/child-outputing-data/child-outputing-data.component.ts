import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-outputing-data',
  templateUrl: './child-outputing-data.component.html',
  styleUrls: ['./child-outputing-data.component.css']
})
export class ChildOutputingDataComponent implements OnInit {

  data: Array<string> = ['data1', 'data2'];

  @Output()
  outputObject = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  pushUp(element: string) {
    this.outputObject.emit(element);
  }

}
