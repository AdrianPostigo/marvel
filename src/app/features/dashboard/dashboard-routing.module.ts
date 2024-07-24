import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: ':type/:all', component: DashboardComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class DashboardRoutingModule {}