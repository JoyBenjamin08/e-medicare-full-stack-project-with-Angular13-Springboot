import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCartComponent } from './create-cart.component';

describe('CreateCartComponent', () => {
  let component: CreateCartComponent;
  let fixture: ComponentFixture<CreateCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
