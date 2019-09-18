import { Component, OnInit } from '@angular/core';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { ChannelModalComponent } from '../modal/channel-modal/channel-modal.component';
import { ChannelApi } from '../../../shared/sdk-build';

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
    private channelApi: ChannelApi,
    private notification: NzNotificationService,
  ) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.channelApi.find().subscribe((data) => {
      if (data && data.length !== 0) {
        this.listOfData = data;
        console.log('channel data', data);
      }
    }, (err) => {
      console.log('Error when get channel data');
    });
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

  openModal(type, id, username): void {
    const modal = this.modalService.create({
      nzTitle: type == 'add' ? 'Add new channel' : 'Edit channel',
      nzContent: ChannelModalComponent,
      nzFooter: null,
      nzClassName: 'channel-modal',
      nzBodyStyle: {'min-height': '430px'},
      nzComponentParams: {
        channelId: id
      }
    });
    modal.afterClose.subscribe((result) => {
      console.log('result close channel modal', result);
      if (result === 'reloadAddData') {
        this.loadData();
        this.createNotification('success', 'Add new channel', 'New channel has been added');
      } else if (result === 'reloadEditData') {
        this.loadData();
        this.createNotification('success', 'Edit channel', `${username} has been edited`);
      } else if (result === 'error') {
        this.createNotification('error', 'Error', 'Something went wrong');
      }
    });
  }

  deleteChannel(item) {
    this.modalService.confirm({
      nzTitle: `Are you sure you want to delete <i>"${item.username}</i>"?`,
      nzContent: 'This action cannot be undone',
      nzOkText: 'Delete',
      nzOnOk: () => {
        this.channelApi.deleteById(item.id).subscribe((res) => {
          this.createNotification('success', 'Delete Channel', `${item.username} has been deleted!`);
          this.listOfData = this.listOfData.filter(data => data !== item);
        }, (err) => {
          this.createNotification('error', 'Error', 'Something went wrong');
        });
      }
    });
  }

  private createNotification(type, title, content): void {
    this.notification.create(type, title, content);
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
