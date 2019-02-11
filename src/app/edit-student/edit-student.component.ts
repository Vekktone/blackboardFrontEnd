import {Component, OnInit} from '@angular/core';
import {StudentService} from '../shared';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  ident: number;
  first_Name: String;
  last_Name: String;
  emailAddress: String;
  address: String;
  city: String;
  state: String;
  zipCode: String;
  resultMsg: String;


  constructor(private studentService: StudentService) {
    this.first_Name = '';
    this.last_Name = '';
    this.emailAddress = '';
    this.address = '';
    this.city = '';
    this.state = '';
    this.zipCode = '';
    this.resultMsg = '';
  }

  /**
   * defaults to set customer details to input fields.
   */
  ngOnInit() {
    if (this.studentService.person != null) {
      this.ident = this.studentService.person.ident;
      this.first_Name = this.studentService.person.firstName;
      this.last_Name = this.studentService.person.last;
      this.emailAddress = this.studentService.person.email;
      this.address = this.studentService.person.address;
      this.city = this.studentService.person.city;
      this.state = this.studentService.person.state;
      this.zipCode = this.studentService.person.zip;
    }
  }

  /**
   * edits customer and displays their current info in input fields.
   */
  editUser() {
    if (this.first_Name === '' ||
      this.last_Name === '' ||
      this.emailAddress === '' ||
      this.address === '' ||
      this.city === '' ||
      this.state === '' ||
      this.zipCode === '') {
      this.resultMsg = 'Some forms are missing. Please fill out all fields.';
    } else if (this.state.length > 2 || this.state === this.state.toLowerCase()) {
      this.resultMsg = 'State must contain only 2 characters and be all uppercase.';
    } else {
      this.resultMsg = 'Successfully Edited Customer!';
      const person = {
        firstName: this.first_Name, last: this.last_Name,
        email: this.emailAddress, address: this.address,
        city: this.city, state: this.state, zip: this.zipCode
      };
      console.log(this.ident);
      this.studentService.editCust(person, this.ident).subscribe(() => {
      });
    }
  }

  /**
   * deletes a customer from the database and checks for missing fields.
   */
  deleteUser() {

    if (this.first_Name === '' ||
      this.last_Name === '' ||
      this.emailAddress === '' ||
      this.address === '' ||
      this.city === '' ||
      this.state === '' ||
      this.zipCode === '') {
      this.resultMsg = 'Some forms are missing. Please fill out all fields.';
    } else {
      this.resultMsg = 'Successfully Deleted Customer!';
      const person = {
        firstName: this.first_Name, last: this.last_Name,
        email: this.emailAddress, address: this.address,
        city: this.city, state: this.state, zip: this.zipCode
      };
      console.log(this.ident);
      this.studentService.deleteCust(person, this.ident).subscribe(() => {
      });
      location.reload();
    }

  }

}
