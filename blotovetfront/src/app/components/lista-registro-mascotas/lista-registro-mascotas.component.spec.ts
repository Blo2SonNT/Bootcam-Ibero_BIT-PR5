import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegistroMascotasComponent } from './lista-registro-mascotas.component';

describe('ListaRegistroMascotasComponent', () => {
  let component: ListaRegistroMascotasComponent;
  let fixture: ComponentFixture<ListaRegistroMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRegistroMascotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRegistroMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
