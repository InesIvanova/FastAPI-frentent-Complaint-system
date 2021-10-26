import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateApproverComponent } from './create-approver.component';

describe('CreateApproverComponent', () => {
  let component: CreateApproverComponent;
  let fixture: ComponentFixture<CreateApproverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateApproverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
