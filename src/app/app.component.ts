import { Component } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  public firstName: boolean = false;
  public lastName: boolean = false;
  public buttonDisabled: boolean = false;

  printedFormValues: Object = {};
  testForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });

  constructor(private fb: FormBuilder){  }

  handlePrint(formValue) {
    // Handle printing logic here
    this.printedFormValues = {...formValue};
  }

  isEqual(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    return true;
}

send(printedFormValues) {
  console.log(printedFormValues)
}

removeFormControls() {
  this.testForm.removeControl('firstName')
  this.testForm.removeControl('lastName')
  this.firstName = !this.firstName
  this.lastName = !this.lastName;
  this.buttonDisabled = !this.buttonDisabled;
}

  
}
