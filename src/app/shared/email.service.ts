import {Injectable} from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) {
  }

  /**
   * This function calls the backend method to compose and send the email
   * @param {String} address
   * @param {Array<any>} customerList
   * @returns {Observable<any>}
   */
  sendEmail(address: String, subject: String, body: String, customerList: Array<any>): Observable<any> {

    const person = {address: address, subjectM: subject, bodyM: body, finalList: customerList};

    return this.http.put('http://localhost:8080/email/sendMail', person).pipe(
      tap(),
      catchError(this.handleError<any>('sendMail'))
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
