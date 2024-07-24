import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/pages/login/login.component';
import { loginGuard } from './features/login/guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then((p) => p.DashboardModule), canActivate: [loginGuard]
  },
  { path: 'details',
    loadChildren: () => import('./features/comics/comics.module').then((p) => p.ComicsModule), canActivate: [loginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
