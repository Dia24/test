import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextClientComponent } from './next-client.component';

describe('NextClientComponent', () => {
  let component: NextClientComponent;
  let fixture: ComponentFixture<NextClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
