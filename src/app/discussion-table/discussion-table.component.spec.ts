import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionTableComponent } from './discussion-table.component';

describe('DiscussionTableComponent', () => {
  let component: DiscussionTableComponent;
  let fixture: ComponentFixture<DiscussionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
