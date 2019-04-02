import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHubComponent } from './main-hub.component';

describe('MainHubComponent', () => {
  let component: MainHubComponent;
  let fixture: ComponentFixture<MainHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
