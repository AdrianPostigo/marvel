import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SpinnerLoaderComponent } from './components/spinner-loader/spinner-loader.component';
import { CardComponent } from './components/card/card.component';
import { AngularMaterialsModule } from './utils/angular-materials/angular-materials.module';

@NgModule({
  declarations: [
    SpinnerLoaderComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialsModule
  ],
  exports: [
    SpinnerLoaderComponent,
    CardComponent,
  ]
})
export class SharedModule { }
