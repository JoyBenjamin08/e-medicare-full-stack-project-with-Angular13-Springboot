import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderListComponent } from './vieworder-list.component';

describe('VieworderListComponent', () => {
  let component: VieworderListComponent;
  let fixture: ComponentFixture<VieworderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieworderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
