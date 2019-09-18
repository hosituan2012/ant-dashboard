import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';
import { ChannelApi } from '../../../../shared/sdk-build';

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
    private modal: NzModalRef,
    private channelApi: ChannelApi
  ) {
    this.channelActionForm = this.fb.group({
      account_id: ['66dmfvN8lhItltOoVCtCFWdAwgDuYnWId1WwLEo2l6BvV3JCJDmrVr5TYFYLHbE5'],
      username: [null, [Validators.required]],
      channel_email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      channel_password: [null, [Validators.required]],
      api_key: [null, [Validators.required]],
      api_secret: [null, [Validators.required]],
      network: ['true'],
      status: ['true'],
    });
  }

  ngOnInit() {
    if (this.channelId) {
      this.channelApi.findById(this.channelId).subscribe((res: any) => {
        if (res.username) this.channelActionForm.controls['username'].setValue(res.username);
        if (res.channel_email) this.channelActionForm.controls['channel_email'].setValue(res.channel_email);
        if (res.channel_password) this.channelActionForm.controls['channel_password'].setValue(res.channel_password);
        if (res.api_key) this.channelActionForm.controls['api_key'].setValue(res.api_key);
        if (res.api_secret) this.channelActionForm.controls['api_secret'].setValue(res.api_secret);
        if (res.network) this.channelActionForm.controls['network'].setValue(res.network);
        if (res.status) this.channelActionForm.controls['status'].setValue(res.status);
      });
    }
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
      const data = this.channelActionForm.getRawValue();
      if (this.channelId) {
        this.editChannel(this.channelId, data);
      } else {
        this.createChannel(data);
      }
    } else {
      this.isValid = false;
    }
  }

  private createChannel(data) {
    this.channelApi.create(data).subscribe((res) => {
      this.destroyModal('reloadAddData');
    }, (err) => {
      this.destroyModal('error');
    });
  }

  private editChannel(id, data) {
    this.channelApi.patchAttributes(id, data).subscribe((res) => {
      this.destroyModal('reloadEditData');
    }, (err) => {
      this.destroyModal('error');
    });
  }

}
