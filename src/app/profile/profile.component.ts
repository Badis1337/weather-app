import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DbService} from '../../services/db.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  valid = false;

  constructor(private dbService: DbService, private router: Router, private formBuilder: FormBuilder

  ) {
    if(localStorage.length>0) {
      this.router.navigateByUrl('/weather');
    }

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.dbService.db.find(e => e.login === this.f.username.value && e.password === this.f.password.value)) {
      const details = this.dbService.db.find(e => e.login === this.f.username.value && e.password === this.f.password.value);
      localStorage.setItem('details', JSON.stringify(details));
      this.router.navigateByUrl('/weather');

    } else {
      this.valid = true;
    }
  }



}
