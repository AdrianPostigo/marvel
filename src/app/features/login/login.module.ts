import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { AngularMaterialsModule } from '../../shared/utils/angular-materials/angular-materials.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialsModule,
    TranslateModule
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
