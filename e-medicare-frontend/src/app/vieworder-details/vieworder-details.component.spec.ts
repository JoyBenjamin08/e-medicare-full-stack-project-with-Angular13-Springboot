import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderDetailsComponent } from './vieworder-details.component';

describe('VieworderDetailsComponent', () => {
  let component: VieworderDetailsComponent;
  let fixture: ComponentFixture<VieworderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieworderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
