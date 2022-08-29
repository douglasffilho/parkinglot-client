import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasPageComponent } from './vagas-page.component';

describe('VagasPageComponent', () => {
  let component: VagasPageComponent;
  let fixture: ComponentFixture<VagasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagasPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
