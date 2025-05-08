import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAssistenciasComponent } from './editar-assistencias.component';

describe('EditarAssistenciasComponent', () => {
  let component: EditarAssistenciasComponent;
  let fixture: ComponentFixture<EditarAssistenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarAssistenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAssistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
