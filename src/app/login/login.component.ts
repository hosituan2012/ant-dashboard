import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

import { UserService } from '~/shared/shared.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  validateLoginForm: FormGroup;
  validateEmailForm: FormGroup;
  validateRegisterForm: FormGroup;
  passwordVisible: false;
  hasPassString = false;
  isLogin = true;
  isRegister = false;
  agreeTerms = false;
  explainTermsCheckbox = false;
  submiting = false;

  region = {
    sider: false,
    header: false,
    footer: false
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private message: NzMessageService,
    private user: UserService
  ) {
    this.validateLoginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
    this.validateEmailForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    });
    this.validateRegisterForm = this.fb.group({
      userName: [null, [Validators.required]],
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      facebook: [null],
    });
  }

  ngOnInit(): void {
    const userInfo = JSON.parse(localStorage.getItem('mmoCurrentUser'));
    if (userInfo) {
        if (userInfo.email === 'admin' && userInfo.password === 'admin') {
            this.router.navigate(['/']);
            console.log('USER ALREADY LOGIN BEFORE');
        }
    }
  }


  submitForm() {
    if (this.isRegister) {
      // tslint:disable-next-line: forin
      for (const i in this.validateRegisterForm.controls) {
        this.validateRegisterForm.controls[i].markAsDirty();
        this.validateRegisterForm.controls[i].updateValueAndValidity();
      }
      if (this.validateRegisterForm.valid) {
        if (this.agreeTerms) {
          console.log(this.validateRegisterForm.getRawValue());
        } else {
          this.explainTermsCheckbox = true;
        }
      }
    } else {
      if (this.isLogin) {
        // tslint:disable-next-line: forin
        for (const i in this.validateLoginForm.controls) {
          this.validateLoginForm.controls[i].markAsDirty();
          this.validateLoginForm.controls[i].updateValueAndValidity();
        }

        if (this.validateLoginForm.valid) console.log(this.validateLoginForm.getRawValue());
      } else {
        this.validateEmailForm.controls['email'].markAsDirty();
        this.validateEmailForm.controls['email'].updateValueAndValidity();

        if (this.validateEmailForm.valid) console.log(this.validateEmailForm.getRawValue());
      }
    }
    const value = this.validateLoginForm.value;
    if (this.validateLoginForm.valid) {
        if (value.userName === 'admin' && value.password === 'admin') {
            localStorage.setItem('mmoCurrentUser', JSON.stringify(value));
            this.router.navigate(['/dashboard']);
        }

        this.submiting = true;
        setTimeout(() => {
          this.user.current = {
            name: 'ZIIDT'
          };
          this.message.info('Login successful!');
          this.submiting = false;
          this.router.navigateByUrl('/');
        }, 1000);
    } else {
      return false;
    }
  }

  onChangePassword() {
    const valueTemp = this.isRegister ? this.validateRegisterForm.getRawValue() : this.validateLoginForm.getRawValue();
    valueTemp.password && valueTemp.password !== '' ? this.hasPassString = true : this.hasPassString = false;
  }

  onChangeAgreeTerms() {
    this.agreeTerms = !this.agreeTerms;
  }
  forgotPass() {
    this.isLogin = !this.isLogin;
  }


}
