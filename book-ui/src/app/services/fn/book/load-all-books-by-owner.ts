/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseBookResponse } from '../../models/page-response-book-response';

export interface LoadAllBooksByOwner$Params {
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  sortDir?: string;
}

export function loadAllBooksByOwner(http: HttpClient, rootUrl: string, params?: LoadAllBooksByOwner$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBookResponse>> {
  const rb = new RequestBuilder(rootUrl, loadAllBooksByOwner.PATH, 'get');
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
      return r as StrictHttpResponse<PageResponseBookResponse>;
    })
  );
}

loadAllBooksByOwner.PATH = '/books/owner';
