/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseFeedbackResponse } from '../../models/page-response-feedback-response';

export interface GetFeedbacksByBookId$Params {
  bookId: number;
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  sortDir?: string;
}

export function getFeedbacksByBookId(http: HttpClient, rootUrl: string, params: GetFeedbacksByBookId$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseFeedbackResponse>> {
  const rb = new RequestBuilder(rootUrl, getFeedbacksByBookId.PATH, 'get');
  if (params) {
    rb.path('bookId', params.bookId, {});
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
      return r as StrictHttpResponse<PageResponseFeedbackResponse>;
    })
  );
}

getFeedbacksByBookId.PATH = '/feedbacks/book/{bookId}';
