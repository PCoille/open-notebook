import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityReadComponent } from './components/activities/activity-read/activity-read.component';
import { ActivityWriteComponent } from './components/activities/activity-write/activity-write.component';


const routes: Routes = [
  { path: 'read', component: ActivityReadComponent},
  { path: 'write', component: ActivityWriteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
