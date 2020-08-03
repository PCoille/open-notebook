import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { AppComponent } from './app.component';
import { ActivityNavbarComponent } from './components/activity-navbar/activity-navbar.component';
import { WriteActivityComponent } from './components/activities/write-activity/write-activity.component';
import { ReadActivityComponent } from './components/activities/read-activity/read-activity.component';
import { ClearDialogComponent } from './components/dialogs/clear-dialog/clear-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    WriteActivityComponent,
    ReadActivityComponent,
    ActivityNavbarComponent,
    ClearDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatDialogModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [

  ]
})
export class AppModule { }
