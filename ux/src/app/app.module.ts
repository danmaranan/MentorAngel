import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatchComponent } from './components/match/match.component';
import { ComingSoonComponent } from './components/comingSoon/comingSoon.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import { ActivityComponent } from './components/activity/activity.component';
import { ActivityListComponent } from './components/activityList/activityList.component';
import { RouterModule, Routes } from "@angular/router";
import { CustomMaterialModule } from "./core/material.module";
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { LoginComponent } from './components/login/login.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', data: { title: 'Login' }, pathMatch: 'full' },
  {
    path: 'login', component: LoginLayoutComponent, data: {title: 'Login'},
    children: [
      {path: '', component: LoginComponent},
      {path: 'register', component: RegistrationComponent}
    ]
  },
  { path: 'main', component: HomeLayoutComponent,
    children: [
      { path: 'activity', component: ActivityComponent },
      { path: 'match', component: MatchComponent },
      { path: 'search', component: SearchComponent},
      { path: 'sendtext', component: ComingSoonComponent},
      { path: 'chat', component: ComingSoonComponent},
      { path: 'welcome', component: WelcomeComponent}
    ]
  }, 
  { path: 'register', component: RegistrationComponent},

  
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MatchComponent,
    ActivityComponent,
    ComingSoonComponent,
    WelcomeComponent,
    ActivityListComponent,
    RegistrationComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    LoginComponent,
    SearchComponent,
    ToolbarComponent
  
  ],
  imports:[
    CommonModule,
    NgtUniversalModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
    appRoutes,
      { useHash: false } // <-- debugging purposes only
    ),
    CustomMaterialModule
  ],
  exports: [
    CommonModule,
    NgtUniversalModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
