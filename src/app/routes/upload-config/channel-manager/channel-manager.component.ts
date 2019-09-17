import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { ChannelModalComponent } from '../modal/channel-modal/channel-modal.component';

@Component({
  selector: 'app-channel-manager',
  templateUrl: './channel-manager.component.html',
  styleUrls: ['./channel-manager.component.less']
})
export class ChannelManagerComponent implements OnInit {

  listOfData: any[] = [];
  loading = false;
  pagination = true;
  fixHeader = false;
  size = 'middle';
  sizeChanger = true;
  expandable = true;
  checkbox = true;
  allChecked = false;
  indeterminate = false;
  displayData: any[] = [];
  simple = false;
  noResult = false;
  position = 'bottom';

  mapOfSort: { [key: string]: any } = {
    id: null,
      channel: null,
      email: null,
      view: null,
      follower: null,
      video: null,
      net: null,
      status: null,
  };
  sortName: string | null = null;
  sortValue: string | null = null;

  constructor(
    private modalService: NzModalService,
  ) { }

  ngOnInit() {
    for (let i = 1; i <= 100; i++) {
      this.listOfData.push({
        id: i,
        channel: 'John Brown',
        email: `vxcvcx${i}@2.com`,
        view: i * 44322,
        follower: i * 8723,
        video: i * 128,
        net: i % 2 == 0 ? 'ON' : 'OFF',
        status: i % 2 == 0 ? 'ON' : 'OFF',
      });
    }
  }

  currentPageDataChange(
    $event: Array<{
      id: string;
      channel: any;
      email: string;
      view: any;
      follower: string;
      video: any;
      net: string;
      status: any;
    }>
  ): void {
    this.displayData = $event;
    this.refreshStatus();
  }


  refreshStatus(): void {
    const validData = this.displayData.filter(value => !value.disabled);
    const allChecked = validData.length > 0 && validData.every(value => value.checked === true);
    const allUnChecked = validData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = !allChecked && !allUnChecked;
  }

  noResultChange(status: boolean): void {
    this.listOfData = [];
    if (!status) {
      this.ngOnInit();
    }
  }

  openModal(type, id): void {
    const modal = this.modalService.create({
      nzTitle: type == 'add' ? 'Add new channel' : 'Edit channel',
      nzContent: ChannelModalComponent,
      nzFooter: null,
      nzClassName: 'channel-modal',
      nzBodyStyle: {'min-height': '385px'},
      nzComponentParams: {
        channelId: id
      }
    });
    modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));
  }


  sort(sortName: string, value: string): void {
    this.sortName = sortName;
    this.sortValue = value;
    // tslint:disable-next-line: forin
    for (const key in this.mapOfSort) {
      this.mapOfSort[key] = key === sortName ? value : null;
    }
    // this.search(this.listOfSearchName, this.listOfSearchAddress);
  }


}
