import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';


import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  pinMatchValidator(control: FormControl): ValidationErrors {
    let password = control.root.get('password');
    return password && control.value !== password.value ? {
      pinMatch: true
    }: null;
  }

  userForm = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    pinNumber: new FormControl('', [Validators.required]),
    repeatPinNumber: new FormControl('', [Validators.required, this.pinMatchValidator])
  })

  get userId(): any { return this.userForm.get('userId'); }
  get pinNumber(): any { return this.userForm.get('pinNumber'); }
  get repeatPinNumber(): any { return this.userForm.get('repeatPinNumber'); }

  register() {

    if(!this.userForm.valid) return;

    let {
      userId,
      pinNumber,
      repeatPinNumber
    } = this.userForm.getRawValue();

    this.authService.register(userId, pinNumber, repeatPinNumber)
    .subscribe(data => {
      this.router.navigate(['']);
    })
  }

}
