import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './core/first-page/first-page.component';
const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule { }
