import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOptionComponent } from './modal-option.component';

describe('ModalOptionComponent', () => {
  let component: ModalOptionComponent;
  let fixture: ComponentFixture<ModalOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
