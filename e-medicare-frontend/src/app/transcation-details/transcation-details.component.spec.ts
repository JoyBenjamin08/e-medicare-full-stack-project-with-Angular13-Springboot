import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscationDetailsComponent } from './transcation-details.component';

describe('TranscationDetailsComponent', () => {
  let component: TranscationDetailsComponent;
  let fixture: ComponentFixture<TranscationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
