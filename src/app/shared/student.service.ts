import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

/**
 * Customer Service which handles calls to the API relating to getting and updating the database.
 */
@Injectable()
export class StudentService {

  constructor(private http: HttpClient) {
  }

  cList: Array<any>;
  person: any;

  /**
   * http endpoint call for getting records from database, usually defaults to 10
   * @param {number} num
   * @returns {Observable<any>}
   */
  getRecords(num: number): Observable<any> {
    return this.http.get('http://localhost:8080/customer/getRecords/' + num).pipe(
      tap((data: any) => {
        this.cList = data;
      }),
      catchError(this.handleError<any>('getRecords')),
    );
  }

  /**
   * search endpoint call to find a record in the databse by first, last, or email.
   * @param {String} searchText
   * @returns {Observable<any>}
   */
  searchData(searchText: String): Observable<any> {
    return this.http.get('http://localhost:8080/customer/searchData/' + searchText).pipe(
      tap((data: any) => {
        this.cList = data;
      }),
      catchError(this.handleError<any>('searchData')),
    );
  }

  /**
   * endpoint call for adding a customer into the database.
   * @param {Object} customer
   * @returns {Observable<any>}
   */
  addCust(customer: Object) {
    return this.http.post('http://localhost:8080/customer/addCust', customer).pipe(
      catchError(this.handleError<any>('addCust'))
    );
  }

  /**
   * endpoint call for editiing an existing customer in the databse.
   * @param {Object} customer
   * @param {number} ident
   * @returns {Observable<any>}
   */
  editCust(customer: Object, ident: number) {
    const editObj = {customer: customer, id: ident};
    return this.http.post('http://localhost:8080/customer/editCust', editObj).pipe(
      catchError(this.handleError<any>('editCust'))
    );
  }

  /**
   * endpoint call for deleting a customer from the database.
   * @param {Object} customer
   * @param {number} ident
   * @returns {Observable<any>}
   */
  deleteCust(customer: Object, ident: number) {
    const editObj = {customer: customer, id: ident};
    return this.http.post('http://localhost:8080/customer/deleteCust', editObj).pipe(
      catchError(this.handleError<any>('editCust'))
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
