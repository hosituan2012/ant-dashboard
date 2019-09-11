import { Component, Input, Output, EventEmitter } from '@angular/core';

interface SettingInterface {
  theme: string;
  color: string;
  mode: string;
  fixedWidth: boolean;
  colorweak: boolean;
}

@Component({
  selector: 'setting-drawer',
  templateUrl: './setting-drawer.component.html',
  styleUrls: ['./setting-drawer.component.less']
})
export class SettingDrawerComponent {

  @Output() settingChange = new EventEmitter();

  @Input() innerClass: object = {};
  @Input()
  get setting(): SettingInterface {
    return this.options;
  }
  set setting(val: SettingInterface) {
    this.options = val;
    this.settingChange.emit(this.options);
  }

  isCollapsed = true;
  options = {
    theme: 'dark',
    color: 'daybreak',
    mode: 'side',
    fixedWidth: false,
    colorweak: false
  };

  themes = [
    {
      key: 'dark',
      image: '/assets/images/theme-dark.svg',
      title: 'Dark menu style'
    },
    {
      key: 'light',
      image: '/assets/images/theme-light.svg',
      title: 'Light menu style'
    }
  ];

  colors = [
    {
      key: 'dust',
      color: '#F5222D',
      title: 'Dust'
    },
    {
      key: 'volcano',
      color: '#FA541C',
      title: 'Volcanic'
    },
    {
      key: 'sunset',
      color: '#FAAD14',
      title: 'Sunset'
    },
    {
      key: 'cyan',
      color: '#13C2C2',
      title: 'Cyan'
    },
    {
      key: 'green',
      color: '#52C41A',
      title: 'Green'
    },
    {
      key: 'daybreak',
      color: '#1890FF',
      title: 'Daybreak（Default）'
    },
    {
      key: 'geekblue',
      color: '#2F54EB',
      title: 'Green blue'
    },
    {
      key: 'purple',
      color: '#722ED1',
      title: 'Purple'
    },
  ];

  modes = [
    {
      key: 'side',
      image: '/assets/images/menu-side.svg',
      title: 'Side menu layout'
    },
    {
      key: 'top',
      image: '/assets/images/menu-top.svg',
      title: 'Top menu layout'
    }
  ];

  layouts = [
    {
      key: 'fixedWidth',
      title: 'Fixed width',
      disabled: function (setting) {
        return setting.mode == 'side';
      }
    }
  ];

  others = [
    {
      key: 'colorweak',
      title: 'Dark mode'
    }
  ];

}
