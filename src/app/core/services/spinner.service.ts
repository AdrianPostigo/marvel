import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  #showLoader = false;
  showLoader() {
    this.#showLoader = true;
  }
  hideLoader() {
    this.#showLoader = false;
  }
  get isLoading() {
    return this.#showLoader;
  }
}
