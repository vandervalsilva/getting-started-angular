import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'getting-started-angular';

  constructor(private appService: AppService) {}

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.nullValidator && Validators.required),
    lastName: new FormControl('', Validators.nullValidator && Validators.required),
    email: new FormControl('', Validators.nullValidator && Validators.required)
  });

  users: any[] = [];
  userCount = 3;

  ngOnInit() {}

  onSubmit() {
    console.log(this.userForm.value);
    const data = this.appService.addUser(this.userForm.value);
    this.userCount = this.userCount + 1;
    this.userForm.reset();

  }

  getAllUsers() {
    this.users = this.appService.getUsers();
  }

}
