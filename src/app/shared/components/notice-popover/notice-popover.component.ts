import { Component, Input, Output, EventEmitter } from '@angular/core';

interface TabInterface {
  type: string;
  title: string;
  empty?: {
    image?: string;
    text?: string;
  };
  rows: any[];
  map?: Function;
}

@Component({
  selector: 'notice-popover',
  templateUrl: './notice-popover.component.html',
  styleUrls: ['./notice-popover.component.less']
})
export class NoticePopoverComponent {

  @Output() visibleChange = new EventEmitter();
  @Output() clear = new EventEmitter();

  @Input() visible: boolean = false;
  @Input() spinning: boolean = false;
  @Input() trigger: string = 'click';
  @Input() innerClass: object = {};

  @Input() tabs: TabInterface[] = [
    {
      type: 'notification',
      title: 'Notice',
      empty: {
        image: '/assets/images/notification.svg',
        text: 'You have read all notifications'
      },
      rows: []
    },
    {
      type: 'message',
      title: 'Message',
      empty: {
        image: '/assets/images/message.svg',
        text: 'You have read all the news'
      },
      rows: []
    },
    {
      type: 'event',
      title: 'Upcoming',
      empty: {
        image: '/assets/images/event.svg',
        text: 'You have completed all the to-do'
      },
      rows: [],
      map: function (row) {
        row['color'] = {
          todo: 'magenta',
          processing: 'blue',
          urgent: 'red',
          doing: 'gold',
        }[row.status];
        return row;
      }
    }
  ];
  @Input()
  get data(): any[] {
    return this.tabs.map(tab => tab.rows).reduce((x, y) => x.concat(y));
  }
  set data(rows: any[]) {
    this.tabs.forEach(tab =>
      tab.rows = rows
        .filter(row => row.type == tab.type)
        .map(row => tab.map ? tab.map(row) : row)
    );
  }

}
