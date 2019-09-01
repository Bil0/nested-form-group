import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  private usersData = [
    {
      name: 'Bob',
      age: 20,
    },
  ];

  get users(): FormArray {
    return this.myForm.get('users') as FormArray;
  }

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      users: this.formBuilder.array(this.usersData.map(user => this.formBuilder.group(user))),
    });
  }

  addUser() {
    this.users.push(this.formBuilder.group({
      name: '',
      age: null,
    }));
  }

  onSubmit() {
    console.log(this.users.value);
    console.log(this.myForm.value);
  }
}
