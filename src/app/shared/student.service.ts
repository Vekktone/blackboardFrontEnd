import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

/**
 * Student Service which handles calls to the API relating to getting and updating the database.
 */
@Injectable()
export class StudentService {

  constructor(private http: HttpClient) {
  }
  sList: Array<any>;
  person: any;

  /**
   * http endpoint call for getting records from database, usually defaults to 10
   * @param {number} num
   * @returns {Observable<any>}
   */
  getRecords(num: number): Observable<any> {
    return this.http.get('http://localhost:8080/student/getRecords/' + num).pipe(
      tap((data: any) => {
        this.sList = data;
      }),
      catchError(this.handleError<any>('getRecords')),
    );
  }

  /**
   * search endpoint call to find a record in the database by first, last, or email.
   * @param {String} searchText
   * @returns {Observable<any>}
   */
  searchData(searchText: String): Observable<any> {
    return this.http.get('http://localhost:8080/student/searchData/' + searchText).pipe(
      tap((data: any) => {
        this.sList = data;
      }),
      catchError(this.handleError<any>('searchData')),
    );
  }

  /**
   * endpoint call for adding a student into the database.
   * @param {Object} student
   * @returns {Observable<any>}
   */
  addStud(student: Object) {
    return this.http.post('http://localhost:8080/student/addStud', student).pipe(
      catchError(this.handleError<any>('addStud'))
    );
  }

  /**
   * endpoint call for editing an existing student in the database.
   * @param {Object} student
   * @param {number} id
   * @returns {Observable<any>}
   */
  editStud(student: Object, id: number) {
    const editObj = {student: student, id: id};
    return this.http.post('http://localhost:8080/student/editStud', editObj).pipe(
      catchError(this.handleError<any>('editStud'))
    );
  }

  /**
   * endpoint call for deleting a student from the database.
   * @param {Object} student
   * @param {number} ident
   * @returns {Observable<any>}
   */
  deleteStud(student: Object, ident: number) {
    const editObj = {student: student, id: ident};
    return this.http.post('http://localhost:8080/student/deleteStud', editObj).pipe(
      catchError(this.handleError<any>('editStud'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
