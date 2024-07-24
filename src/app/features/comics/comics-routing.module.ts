import { RouterModule, Routes } from "@angular/router";
import { ComicsDetailsComponent } from "./pages/comics-details/comics-details.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: ':id', component: ComicsDetailsComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ComicsRoutingModule {}