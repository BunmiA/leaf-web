import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafHomeComponent } from './leaf-home.component';

describe('LeafHomeComponent', () => {
  let component: LeafHomeComponent;
  let fixture: ComponentFixture<LeafHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
