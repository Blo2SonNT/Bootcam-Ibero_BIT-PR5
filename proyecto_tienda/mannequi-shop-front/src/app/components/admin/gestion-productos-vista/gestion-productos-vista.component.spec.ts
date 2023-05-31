import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProductosVistaComponent } from './gestion-productos-vista.component';

describe('GestionProductosVistaComponent', () => {
  let component: GestionProductosVistaComponent;
  let fixture: ComponentFixture<GestionProductosVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProductosVistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionProductosVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
