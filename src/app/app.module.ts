import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreeWriteComponent } from './components/free-write/free-write.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { ActivityNavbarComponent } from './components/activity-navbar/activity-navbar.component';
import { ActivityWriteComponent } from './components/activities/activity-write/activity-write.component';
import { ActivityReadComponent } from './components/activities/activity-read/activity-read.component';


@NgModule({
  declarations: [
    AppComponent,
    FreeWriteComponent,
    MainNavbarComponent,
    ActivityWriteComponent,
    ActivityReadComponent,
    ActivityNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
