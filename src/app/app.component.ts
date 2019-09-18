import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, ActivationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NzModalService } from 'ng-zorro-antd';

import { UserService } from '~/shared/shared.module';
import { LoopBackConfig, CategoryApi } from './shared/sdk-build';

@Component({
  selector: 'app-root,[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  host: {
    '[class.colorweak]': 'layout.setting.colorweak',
    '[attr.theme]': 'layout.setting.theme',
    '[attr.color]': 'layout.setting.color',
    '[attr.mode]': 'layout.setting.mode'
  }
})
export class AppComponent {

  layout = {
    collapsed: true,
    siderMode: 'over',
    topMode: function () {
      return this.siderMode !== 'over' && this.setting.mode == 'top';
    },
    setting: {
      theme: 'dark',
      color: 'daybreak',
      mode: 'side',
      fixedWidth: false,
      colorweak: false
    }
  };

  menu = [
    {
      title: 'Account',
      icon: 'user',
      children: [
        {
          title: 'Profile',
          routerLink: '/account/profile'
        },
        // {
        //   title: 'Settings',
        //   routerLink: '/account/setting'
        // }
      ]
    },
    {
      title: 'Tool',
      icon: 'tool',
      children: [
        { title: 'Vip tool',
          icon: 'star',
          children: [
            { title: 'Advance Search', icon: 'search', routerLink: '/tool/advance-search' },
            { title: 'Upload Videos', icon: 'upload', routerLink: '/tool/upload' },
          ]
        },
        { title: 'Free tool', routerLink: '/system/user' }
      ]
    },
    {
      title: 'Upload Config',
      icon: 'setting',
      children: [
        {
          title: 'Channel Manager',
          routerLink: '/config/channel'
        },
        {
          title: 'Settings',
          routerLink: '/account/setting'
        }
      ]
    },
    // {
    //   title: 'System settings',
    //   icon: 'setting',
    //   children: [
    //     { title: 'Role management', routerLink: '/system/role' },
    //     { title: 'User Management', routerLink: '/system/user' }
    //   ]
    // },
    {
      title: 'Exception page',
      icon: 'warning',
      children: [
        { title: '403', routerLink: '/exception/403' },
        { title: '404', routerLink: '/exception/404' },
        { title: '500', routerLink: '/exception/500' }
      ]
    },
    {
      title: 'Using help',
      icon: 'question-circle',
      routerLink: '/page/help',
      children: []
    }
  ];

  constructor(
    breakpointObserver: BreakpointObserver,
    router: Router,
    public user: UserService,
    private modal: NzModalService,
    private categoryApi: CategoryApi
    ) {
      breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
        this.layout.siderMode = result.matches ? 'over' : 'side';
        this.layout.collapsed = result.matches;
      });

      router.events.pipe(filter(event => event instanceof ActivationStart)).subscribe(() => {
        if (this.layout.siderMode == 'over') {
          this.layout.collapsed = true;
        }
      });
      LoopBackConfig.setBaseURL('https://daily.dev.api.cauca.dev');
      this.categoryApi.find().subscribe((res) => {
        console.log('category', res);
        
      })


      // LoopBackConfig.setApiVersion(environment.apiVersion);

  }

  logout() {
    this.modal.confirm({
      nzTitle: 'Are you sure you want to sign out?',
      nzMaskClosable: true,
      nzOnOk: () => this.user.logout()
    });
  }

  showLayout() {

    console.log('layout', this.layout);
    
  }

}
