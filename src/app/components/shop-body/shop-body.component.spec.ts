import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBodyComponent } from './shop-body.component';

describe('ShopBodyComponent', () => {
  let component: ShopBodyComponent;
  let fixture: ComponentFixture<ShopBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopBodyComponent]
    });
    fixture = TestBed.createComponent(ShopBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
