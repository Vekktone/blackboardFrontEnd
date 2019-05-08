import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostReplyComponent } from './post-reply.component';

describe('PostReplyComponent', () => {
  let component: PostReplyComponent;
  let fixture: ComponentFixture<PostReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
