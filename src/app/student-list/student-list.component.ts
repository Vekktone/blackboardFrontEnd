import {Component, OnInit} from '@angular/core';
import {StudentService} from '../shared';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit {
  public customersMain: Observable<Array<any>>;
  searchText: String;
  filter: String;
  resultMessage: String;
  currentResultsPerPage: number;

  constructor(private studentService: StudentService) {
    this.searchText = '';
    this.filter = null;
    this.currentResultsPerPage = 10;
  }

  /**
   * OnInit method which initializes the table with our default customer file
   */
  ngOnInit() {
    this.getRecords('10');
  }

  /**
   * default get function for getting records. Verifies that string param is indeed a num, defaults to 10/
   * @param {string} num
   */
  getRecords(num: string) {
    const re = /[A-Za-z -+=%$#^&*#@]+/;
    if (re.test(num) || num === '') {
      this.resultMessage = 'Invalid filter. Try again';
      return;
    }
    const finalVal = parseInt(num, 10);
    if (finalVal < 0){
      this.resultMessage = 'Invalid filter. Try again';
      return;
    }

    // console.log(num);
    this.resultMessage = '';
    this.customersMain = this.studentService.getRecords(finalVal);
    this.currentResultsPerPage = finalVal;
  }

  /**
   * searches the table for first, last, or email
   */
  searchTable() {
    if (this.searchText === '') {
      this.resultMessage = 'Invalid entry. Please type a valid query';
      return;
    } else {
      this.customersMain = this.studentService.searchData(this.searchText);

      this.customersMain.subscribe(data => {
        if (data[0] === undefined) {
          this.resultMessage = 'No results found';
          return;
        } else {
          this.resultMessage = 'Success. Results are Below...';
        }
      });
    }
  }

  /**
   * sets the person in customer service to have attributes of currently selected customer for editing purposes.
   * @param {number} id
   * @param {String} first
   * @param {String} last
   * @param {String} email
   * @param {String} address
   * @param {String} city
   * @param {String} state
   * @param {String} zip
   */
  editCust(id: number, first: String, last: String, email: String,
           address: String, city: String, state: String, zip: String) {

    const person = {
      ident: id, firstName: first, last: last,
      email: email, address: address,
      city: city, state: state, zip: zip
    };

    this.studentService.person = person;

  }

  /**
   * sorts the table on any column clicked
   * @param {number} n
   */
  sortTable(n: number) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById('tableShow');
    switching = true;
    // Set the sorting direction to ascending:
    dir = 'asc';
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      // start by saying: no switching is done:
      switching = false;
      rows = table.getElementsByTagName('TR');
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        // start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName('TD')[n];
        y = rows[i + 1].getElementsByTagName('TD')[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir === 'asc') {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir === 'desc') {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount++;
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount === 0 && dir === 'asc') {
          dir = 'desc';
          switching = true;
        }
      }
    }
  }
}
