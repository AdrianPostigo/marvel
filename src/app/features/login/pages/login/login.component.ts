import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILoginHash } from '../../models/interfaces/login-hash/ilogin-hash';
import { HashService } from '../../services/hash/hash.service';
import { SessionStorageService } from '../../../../shared/utils/storage/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{

  hashService = inject(HashService);
  sessionStorage = inject(SessionStorageService);
  router = inject(Router);
  hide = signal(true);
  loginHashObject!: ILoginHash;
  hashGenerated: string = "";

  loginForm = new FormGroup({
    timestamp: new FormControl('1', [
      Validators.required,
    ]),
    publicKey: new FormControl('e59680f5fdc9f1a85be64ce8a6628768', [
      Validators.required,
    ]),
    privateKey: new FormControl('f304330a4cb19ed81bf07939641b2160104fd2c3', [
      Validators.required,
    ]),
  });



  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide);
    event.stopPropagation();
  }

  getDataLoginForm(): void{
    if(this.loginForm.valid) {
      this.loginHashObject = this.loginForm.value as ILoginHash;
      console.log('data', this.loginHashObject)
      this.hashGenerated = this.hashService.generateHash(this.loginHashObject);
      console.log('hash', this.hashGenerated)
      this.sessionStorage.setItem('loginHashObject',this.loginHashObject);
      this.sessionStorage.setItem('hash', this.hashGenerated);
      this.router.navigate(['/dashboard', 'series', 'all']);
    }
  }

  checkControl(pControlName: string, pError: string): boolean {
    if (this.loginForm.get(pControlName)?.hasError(pError) && this.loginForm.get(pControlName)?.touched) return true;
    else return false;
  }
}
