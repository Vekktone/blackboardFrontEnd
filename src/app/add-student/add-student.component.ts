import {Component, OnInit} from '@angular/core';
import {StudentService} from '../shared';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  newFirst: String;
  newLast: String;
  newEmail: String;
  newAddress: String;
  newCity: String;
  newState: String;
  newZip: String;
  resultMsg = '';

  constructor(private studentService: StudentService) {
    this.newFirst = '';
    this.newLast = '';
    this.newEmail = '';
    this.newAddress = '';
    this.newCity = '';
    this.newState = '';
    this.newZip = '';
    this.resultMsg = '';
  }

  ngOnInit() {
  }

  /**
   * validates new customer fields and calls the service to add to database.
   */
  processUser() {
    if (this.newFirst === '' ||
      this.newLast === '' ||
      this.newEmail === '' ||
      this.newAddress === '' ||
      this.newCity === '' ||
      this.newState === '' ||
      this.newZip === '') {
      this.resultMsg = 'Some forms are missing. Please fill out all fields.';
    } else if (this.newState.length > 2 ||
      (this.newState === this.newState.toLowerCase())) {
      this.resultMsg = 'State must contain only 2 characters and be all uppercase.';
    } else {
      this.resultMsg = 'Added new customer!';
      const person = {
        firstName: this.newFirst, last: this.newLast,
        email: this.newEmail, address: this.newAddress,
        city: this.newCity, state: this.newState, zip: this.newZip
      };
      this.studentService.addCust(person).subscribe(() => {
      });
      window.location.reload();

    }

  }
}
