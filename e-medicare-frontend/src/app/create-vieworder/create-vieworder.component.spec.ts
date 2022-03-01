import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVieworderComponent } from './create-vieworder.component';

describe('CreateVieworderComponent', () => {
  let component: CreateVieworderComponent;
  let fixture: ComponentFixture<CreateVieworderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVieworderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVieworderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
