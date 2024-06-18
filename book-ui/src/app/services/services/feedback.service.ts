/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createFeedback } from '../fn/feedback/create-feedback';
import { CreateFeedback$Params } from '../fn/feedback/create-feedback';
import { getFeedbacksByBookId } from '../fn/feedback/get-feedbacks-by-book-id';
import { GetFeedbacksByBookId$Params } from '../fn/feedback/get-feedbacks-by-book-id';
import { PageResponseFeedbackResponse } from '../models/page-response-feedback-response';

@Injectable({ providedIn: 'root' })
export class FeedbackService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createFeedback()` */
  static readonly CreateFeedbackPath = '/feedbacks';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createFeedback()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createFeedback$Response(params: CreateFeedback$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return createFeedback(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createFeedback$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createFeedback(params: CreateFeedback$Params, context?: HttpContext): Observable<number> {
    return this.createFeedback$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getFeedbacksByBookId()` */
  static readonly GetFeedbacksByBookIdPath = '/feedbacks/book/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFeedbacksByBookId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeedbacksByBookId$Response(params: GetFeedbacksByBookId$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseFeedbackResponse>> {
    return getFeedbacksByBookId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFeedbacksByBookId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeedbacksByBookId(params: GetFeedbacksByBookId$Params, context?: HttpContext): Observable<PageResponseFeedbackResponse> {
    return this.getFeedbacksByBookId$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseFeedbackResponse>): PageResponseFeedbackResponse => r.body)
    );
  }

}
