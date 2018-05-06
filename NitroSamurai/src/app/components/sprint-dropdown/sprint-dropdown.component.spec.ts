import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintDropdownComponent } from './sprint-dropdown.component';

describe('SprintDropdownComponent', () => {
  let component: SprintDropdownComponent;
  let fixture: ComponentFixture<SprintDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
