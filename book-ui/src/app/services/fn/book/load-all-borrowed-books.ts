/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseBorrowedBookResponse } from '../../models/page-response-borrowed-book-response';

export interface LoadAllBorrowedBooks$Params {
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  sortDir?: string;
}

export function loadAllBorrowedBooks(http: HttpClient, rootUrl: string, params?: LoadAllBorrowedBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBorrowedBookResponse>> {
  const rb = new RequestBuilder(rootUrl, loadAllBorrowedBooks.PATH, 'get');
  if (params) {
    rb.query('pageNo', params.pageNo, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('sortBy', params.sortBy, {});
    rb.query('sortDir', params.sortDir, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseBorrowedBookResponse>;
    })
  );
}

loadAllBorrowedBooks.PATH = '/books/borrowed';
