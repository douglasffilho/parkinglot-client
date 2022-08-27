import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'modal-option',
  templateUrl: './modal-option.component.html',
  styleUrls: ['./modal-option.component.scss']
})
export class ModalOptionComponent {
  id: string = uuid.v4();

  @Input()
  value: string = '';

  @Output()
  onSelect: EventEmitter<string> = new EventEmitter<string>();

  selectValue() {
    this.onSelect.emit(this.value);
  }

}
