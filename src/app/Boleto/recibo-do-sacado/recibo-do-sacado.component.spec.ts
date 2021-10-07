import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciboDoSacadoComponent } from './recibo-do-sacado.component';

describe('ReciboDoSacadoComponent', () => {
  let component: ReciboDoSacadoComponent;
  let fixture: ComponentFixture<ReciboDoSacadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReciboDoSacadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciboDoSacadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
