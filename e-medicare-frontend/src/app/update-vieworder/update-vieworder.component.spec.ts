import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVieworderComponent } from './update-vieworder.component';

describe('UpdateVieworderComponent', () => {
  let component: UpdateVieworderComponent;
  let fixture: ComponentFixture<UpdateVieworderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVieworderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVieworderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
