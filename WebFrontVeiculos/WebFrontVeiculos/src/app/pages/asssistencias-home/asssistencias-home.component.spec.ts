import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsssistenciasHomeComponent } from './asssistencias-home.component';

describe('AsssistenciasHomeComponent', () => {
  let component: AsssistenciasHomeComponent;
  let fixture: ComponentFixture<AsssistenciasHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsssistenciasHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsssistenciasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
