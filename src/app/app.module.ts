import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule,
  MatGridListModule, MatMenuModule, MatButtonToggle, MatButtonToggleGroup, MatButtonToggleModule, MatTreeModule, MatAccordionDisplayMode,
  MatExpansionModule
} from '@angular/material';
import { LeafSideComponent } from './leaf-side/leaf-side.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LeafSideNavComponent } from './leaf-side-nav/leaf-side-nav.component';
import { LeafDashboardComponent } from './leaf-dashboard/leaf-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { LeafHomeComponent } from './leaf-home/leaf-home.component';
import { LeafAboutUsComponent } from './leaf-about-us/leaf-about-us.component';
import { LeafContactUsComponent } from './leaf-contact-us/leaf-contact-us.component';
import { LeafGetInvolvedComponent } from './leaf-get-involved/leaf-get-involved.component';
import {OverlayContainer} from '@angular/cdk/overlay';

const appRoutes: Routes = [
  { path: 'home', component: LeafHomeComponent },
  { path: 'aboutus',      component: LeafAboutUsComponent },
  { path: 'contactus', component: LeafContactUsComponent },
  { path: 'getinvolved',      component: LeafGetInvolvedComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LeafSideComponent,
    LeafSideNavComponent,
    LeafDashboardComponent,
    LeafHomeComponent,
    LeafAboutUsComponent,
    LeafContactUsComponent,
    LeafGetInvolvedComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonToggleModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('leaf-dark-theme');
  }
}



