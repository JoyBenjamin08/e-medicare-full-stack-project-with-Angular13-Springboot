import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBuyComponent } from './cart-buy.component';

describe('CartBuyComponent', () => {
  let component: CartBuyComponent;
  let fixture: ComponentFixture<CartBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
