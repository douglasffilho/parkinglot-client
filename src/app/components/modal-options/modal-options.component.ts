import { AfterViewInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { ModalOptionComponent } from './modal-option/modal-option.component';

@Component({
  selector: 'modal-options',
  templateUrl: './modal-options.component.html',
  styleUrls: ['./modal-options.component.scss']
})
export class ModalOptionsComponent implements AfterViewInit {
  @Input()
  id: string = '';

  modalVisible: Boolean = false;

  modalValue: string = '';

  @ContentChildren(ModalOptionComponent)
  modalOptions!: QueryList<ModalOptionComponent>;

  @Output()
  onSelect: EventEmitter<string> = new EventEmitter<string>();

  toggleModalVisibility() {
    this.modalVisible = !this.modalVisible;
  }

  selectValue(value: string) {
    this.modalValue = value;
  }

  callback() {
    this.onSelect.emit(this.modalValue);
    this.modalVisible = false;
  }

  ngAfterViewInit(): void {
    this.modalOptions.forEach(option => {
      option.onSelect.subscribe((eventvalue) => {
        this.selectValue(eventvalue);
      });
    });
  }
}
