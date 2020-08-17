import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchDataDashboardComponent } from './launch-dashboard/launch-data-dashboard/launch-data-dashboard.component';

const routes: Routes = [
  { path: 'year/:id', component: LaunchDataDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
