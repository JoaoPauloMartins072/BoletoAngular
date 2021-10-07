import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDePagamentoComponent } from './local-de-pagamento.component';

describe('LocalDePagamentoComponent', () => {
  let component: LocalDePagamentoComponent;
  let fixture: ComponentFixture<LocalDePagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalDePagamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalDePagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
