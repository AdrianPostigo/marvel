import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsDetailsComponent } from './pages/comics-details/comics-details.component';
import { ComicsRoutingModule } from './comics-routing.module';
import { AngularMaterialsModule } from '../../shared/utils/angular-materials/angular-materials.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ComicsDetailsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialsModule,
    ReactiveFormsModule,
    ComicsRoutingModule
  ],
  exports: [
    ComicsDetailsComponent
  ]
})
export class ComicsModule { }
