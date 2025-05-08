import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAssistenciasComponent } from './cadastro-assistencias.component';

describe('CadastroAssistenciasComponent', () => {
  let component: CadastroAssistenciasComponent;
  let fixture: ComponentFixture<CadastroAssistenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroAssistenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAssistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
