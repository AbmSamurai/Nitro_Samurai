import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaReviewComponent } from './criteria-review.component';

describe('CriteriaReviewComponent', () => {
  let component: CriteriaReviewComponent;
  let fixture: ComponentFixture<CriteriaReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriaReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
