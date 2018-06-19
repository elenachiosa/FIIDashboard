import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SubjectService } from './services/subject.service';
import { TimetableService } from './services/timetable.service';
import { ProfessorService } from './services/professor.service';


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { RemoveSlash } from './pipes/remove-slash.pipe';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/layout/sidebar/sidebar.component';
import { MainMenuComponent } from './components/layout/sidebar/main-menu/main-menu.component';
import { ProfileImageComponent } from './components/layout/sidebar/profile-image/profile-image.component';
import { ContentComponent } from './components/layout/content/content.component';
import { HeaderComponent } from './components/layout/header/header.component';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { TimetableModalComponent } from './components/timetable/timetable-modal/timetable-modal.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SubjectComponent } from './components/subject/subject.component';
import { SubjectTileComponent } from './components/shared/subject-tile/subject-tile.component';
import { LogEntryComponent } from './components/shared/log-entry/log-entry.component';
import { GroupModalComponent } from './components/timetable/group-modal/group-modal.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { TaxesComponent } from './components/taxes/taxes.component';
import { TrajectoryComponent } from './components/trajectory/trajectory.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 0.5
};

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainMenuComponent,
    ProfileImageComponent,
    ContentComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    TimetableComponent,
    ModalComponent,
    TimetableModalComponent,
    NotFoundComponent,
    RemoveSlash,
    ProfileComponent,
    SubjectComponent,
    SubjectTileComponent,
    LogEntryComponent,
    GroupModalComponent,
    ButtonComponent,
    TaxesComponent,
    TrajectoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PerfectScrollbarModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, data: { animation: 'home' } },
      { path: 'login', component: LoginComponent, data: { animation: 'login' } },
      { path: 'timetable', component: TimetableComponent, data: { animation: 'timetable' } },
      { path: 'profile', component: ProfileComponent, data: { animation: 'profile' } },
      { path: 'taxes', component: TaxesComponent, data: { animation: 'taxes' } },
      { path: 'trajectory', component: TrajectoryComponent, data: { animation: 'trajectory' } },
      { path: '404', component: NotFoundComponent, data: { animation: 'notfound' } },
      { path: 'subject/:id', component: SubjectComponent, data: { animation: 'subject' } },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: '404' }

    ])
  ],
  entryComponents: [
    TimetableModalComponent,
    GroupModalComponent
  ],
  providers: [
    SubjectService,
    TimetableService,
    ProfessorService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
