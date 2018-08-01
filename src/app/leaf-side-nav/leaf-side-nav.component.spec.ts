
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LeafSideNavComponent } from './leaf-side-nav.component';

describe('LeafSideNavComponent', () => {
  let component: LeafSideNavComponent;
  let fixture: ComponentFixture<LeafSideNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [LeafSideNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeafSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
