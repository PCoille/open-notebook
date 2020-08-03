import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadActivityComponent } from './components/activities/read-activity/read-activity.component';
import { WriteActivityComponent } from './components/activities/write-activity/write-activity.component';


const routes: Routes = [
  { path: 'read', component: ReadActivityComponent},
  { path: 'write', component: WriteActivityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
