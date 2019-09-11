import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd';

import { UserService } from '~/shared/shared.module';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  guests = [
    '/login'
  ];

  constructor(private router: Router, private user: UserService, private notification: NzNotificationService) { }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.guests.find(guest => state.url.startsWith(guest))) {
      return true;
    }

    return this.user.hasLogin().catch(() => {
      this.notification.error('System hint', 'The user is not logged in, please log in again!');
      this.router.navigate(['/login', { next: state.url }]);
      return Promise.resolve(false);
    });
  }
}
