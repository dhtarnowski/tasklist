import { Component, OnInit, Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.css']
})

export class ButtomComponent implements OnInit {
  @Input() text:string = "";
  @Input() color:string = "";
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }


}
