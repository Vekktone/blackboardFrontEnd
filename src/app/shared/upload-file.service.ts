import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class UploadFileService {

  constructor(private http: HttpClient) {
  }

  /**
   * This fuunction calls the API endpoint to upload a file to the server
   * @param {File} file
   * @returns {Observable<any>}
   */
  pushFileToStorage(file: File): Observable<any> {

    const formData: FormData = new FormData();

    formData.append('file', file);

    return this.http.post('http://localhost:8080/upload/pushFile', formData, {observe: 'response'}).pipe(
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
