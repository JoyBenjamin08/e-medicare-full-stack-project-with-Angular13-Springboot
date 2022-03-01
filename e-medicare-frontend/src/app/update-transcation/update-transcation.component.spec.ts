import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTranscationComponent } from './update-transcation.component';

describe('UpdateTranscationComponent', () => {
  let component: UpdateTranscationComponent;
  let fixture: ComponentFixture<UpdateTranscationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTranscationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTranscationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
