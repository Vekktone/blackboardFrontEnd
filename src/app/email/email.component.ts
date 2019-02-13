import {Component, OnInit} from '@angular/core';
import {StudentService} from '../shared';
import {EmailService} from '../shared';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  submitText: String;
  subjectText: String;
  bodyText: String;
  emailStatus: String;


  constructor(private emailService: EmailService,
              private studentService: StudentService) {
    this.submitText = '';
    this.subjectText = '';
    this.bodyText = '';
    this.emailStatus = '';
  }

  ngOnInit() {
  }

  /**
   * This function calls our service with the parameters we need to send an email on the backend side.
   */
  sendEmail(): void {
    if (this.validateEmail(this.submitText)) {
      this.emailService.sendEmail(this.submitText, this.subjectText, this.bodyText, this.studentService.sList).subscribe();
      this.emailStatus = '***Success! Go check your email!!***';
    } else if (this.submitText === '' || this.subjectText === '' || this.bodyText === '') {
      this.emailStatus = '***Some forms are missing. Please fill out all forms.***';
    } else {
      this.emailStatus = '***Invalid email. Please try again with a valid email address.***';
    }
  }

  /**
   * helper function for email validation
   * @param email
   * @returns {boolean}
   */
  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}
