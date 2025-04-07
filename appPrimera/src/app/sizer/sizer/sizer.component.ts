import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.scss']
})
export class SizerComponent implements OnInit {

  @Input() size:  string;
  @Output() sizeChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  enviarPadre(){
    //this.size = Math.min(40, Math.max(8, +this.size ));
    this.sizeChange.emit(this.size);
  }

}
