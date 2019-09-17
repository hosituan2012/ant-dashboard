import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-channel-modal',
  templateUrl: './channel-modal.component.html',
  styleUrls: ['./channel-modal.component.less']
})
export class ChannelModalComponent implements OnInit {

  @Input() type;
  @Input() channelId;
  channelActionForm: FormGroup;
  isValid = true;

  constructor(
    private fb: FormBuilder,
    private modal: NzModalRef
  ) {
    this.channelActionForm = this.fb.group({
      username: [null, [Validators.required]],
      channel_email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      channel_password: [null, [Validators.required]],
      api_key: [null, [Validators.required]],
      api_secret: [null, [Validators.required]],
      network: ['off'],
      status: [null],
    });
  }

  ngOnInit() {
    console.log('Channel id =>>>', this.channelId);
    
  }

  destroyModal(value): void {
    this.modal.destroy(value);
  }

  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.channelActionForm.controls) {
      this.channelActionForm.controls[i].markAsDirty();
      this.channelActionForm.controls[i].updateValueAndValidity();
    }
    if (this.channelActionForm.valid) {
      console.log('Submit form', this.channelActionForm.getRawValue());
      this.destroyModal('reloadData');
    } else {
      this.isValid = false;
    }
  }

}
