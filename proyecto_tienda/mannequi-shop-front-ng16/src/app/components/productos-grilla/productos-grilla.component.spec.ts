import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosGrillaComponent } from './productos-grilla.component';

describe('ProductosGrillaComponent', () => {
  let component: ProductosGrillaComponent;
  let fixture: ComponentFixture<ProductosGrillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosGrillaComponent]
    });
    fixture = TestBed.createComponent(ProductosGrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
