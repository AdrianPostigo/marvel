import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { MarvelApiService } from '../../../shared/services/marvel/series/marvel-api.service';
import { catchError, map, of } from 'rxjs';

export const loginGuard: CanActivateFn = (route: ActivatedRouteSnapshot,state: RouterStateSnapshot) => {
  const marvelApiService = inject(MarvelApiService);
  const router = inject(Router);

  return marvelApiService.checkRequestSuccess().pipe(
    map(response => {
      if (!response) {
        router.navigate(['/login']);
        return false;
      }
      return true;
    }),
    catchError(() => {
      router.navigate(['/login']);
      return of(false);
    })
  );
};