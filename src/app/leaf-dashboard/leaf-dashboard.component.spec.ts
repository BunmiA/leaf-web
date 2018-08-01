
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafDashboardComponent } from './leaf-dashboard.component';

describe('LeafDashboardComponent', () => {
  let component: LeafDashboardComponent;
  let fixture: ComponentFixture<LeafDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeafDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
