/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { approveReturnBorrowedBook } from '../fn/book/approve-return-borrowed-book';
import { ApproveReturnBorrowedBook$Params } from '../fn/book/approve-return-borrowed-book';
import { BookResponse } from '../models/book-response';
import { borrowBook } from '../fn/book/borrow-book';
import { BorrowBook$Params } from '../fn/book/borrow-book';
import { loadAllBooks } from '../fn/book/load-all-books';
import { LoadAllBooks$Params } from '../fn/book/load-all-books';
import { loadAllBooksByOwner } from '../fn/book/load-all-books-by-owner';
import { LoadAllBooksByOwner$Params } from '../fn/book/load-all-books-by-owner';
import { loadAllBorrowedBooks } from '../fn/book/load-all-borrowed-books';
import { LoadAllBorrowedBooks$Params } from '../fn/book/load-all-borrowed-books';
import { loadAllReturnedBooks } from '../fn/book/load-all-returned-books';
import { LoadAllReturnedBooks$Params } from '../fn/book/load-all-returned-books';
import { loadBookById } from '../fn/book/load-book-by-id';
import { LoadBookById$Params } from '../fn/book/load-book-by-id';
import { PageResponseBookResponse } from '../models/page-response-book-response';
import { PageResponseBorrowedBookResponse } from '../models/page-response-borrowed-book-response';
import { returnBorrowedBook } from '../fn/book/return-borrowed-book';
import { ReturnBorrowedBook$Params } from '../fn/book/return-borrowed-book';
import { save } from '../fn/book/save';
import { Save$Params } from '../fn/book/save';
import { updateArchivedStatusBook } from '../fn/book/update-archived-status-book';
import { UpdateArchivedStatusBook$Params } from '../fn/book/update-archived-status-book';
import { updateShareableStatusBook } from '../fn/book/update-shareable-status-book';
import { UpdateShareableStatusBook$Params } from '../fn/book/update-shareable-status-book';
import { uploadBookCoverPicture } from '../fn/book/upload-book-cover-picture';
import { UploadBookCoverPicture$Params } from '../fn/book/upload-book-cover-picture';

@Injectable({ providedIn: 'root' })
export class BookService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `loadAllBooks()` */
  static readonly LoadAllBooksPath = '/books';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loadAllBooks()` instead.
   *
   * This method doesn't expect any request body.
   */
  loadAllBooks$Response(params?: LoadAllBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBookResponse>> {
    return loadAllBooks(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loadAllBooks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loadAllBooks(params?: LoadAllBooks$Params, context?: HttpContext): Observable<PageResponseBookResponse> {
    return this.loadAllBooks$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBookResponse>): PageResponseBookResponse => r.body)
    );
  }

  /** Path part for operation `save()` */
  static readonly SavePath = '/books';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save$Response(params: Save$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save(params: Save$Params, context?: HttpContext): Observable<number> {
    return this.save$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `uploadBookCoverPicture()` */
  static readonly UploadBookCoverPicturePath = '/books/cover/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadBookCoverPicture()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadBookCoverPicture$Response(params: UploadBookCoverPicture$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return uploadBookCoverPicture(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadBookCoverPicture$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadBookCoverPicture(params: UploadBookCoverPicture$Params, context?: HttpContext): Observable<{
}> {
    return this.uploadBookCoverPicture$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `borrowBook()` */
  static readonly BorrowBookPath = '/books/borrowed/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `borrowBook()` instead.
   *
   * This method doesn't expect any request body.
   */
  borrowBook$Response(params: BorrowBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return borrowBook(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `borrowBook$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  borrowBook(params: BorrowBook$Params, context?: HttpContext): Observable<number> {
    return this.borrowBook$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `updateShareableStatusBook()` */
  static readonly UpdateShareableStatusBookPath = '/books/shareable/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateShareableStatusBook()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateShareableStatusBook$Response(params: UpdateShareableStatusBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateShareableStatusBook(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateShareableStatusBook$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateShareableStatusBook(params: UpdateShareableStatusBook$Params, context?: HttpContext): Observable<number> {
    return this.updateShareableStatusBook$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `returnBorrowedBook()` */
  static readonly ReturnBorrowedBookPath = '/books/borrow/return/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `returnBorrowedBook()` instead.
   *
   * This method doesn't expect any request body.
   */
  returnBorrowedBook$Response(params: ReturnBorrowedBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return returnBorrowedBook(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `returnBorrowedBook$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  returnBorrowedBook(params: ReturnBorrowedBook$Params, context?: HttpContext): Observable<number> {
    return this.returnBorrowedBook$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `approveReturnBorrowedBook()` */
  static readonly ApproveReturnBorrowedBookPath = '/books/borrow/return/approve/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `approveReturnBorrowedBook()` instead.
   *
   * This method doesn't expect any request body.
   */
  approveReturnBorrowedBook$Response(params: ApproveReturnBorrowedBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return approveReturnBorrowedBook(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `approveReturnBorrowedBook$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  approveReturnBorrowedBook(params: ApproveReturnBorrowedBook$Params, context?: HttpContext): Observable<number> {
    return this.approveReturnBorrowedBook$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `updateArchivedStatusBook()` */
  static readonly UpdateArchivedStatusBookPath = '/books/archived/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateArchivedStatusBook()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArchivedStatusBook$Response(params: UpdateArchivedStatusBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateArchivedStatusBook(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateArchivedStatusBook$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArchivedStatusBook(params: UpdateArchivedStatusBook$Params, context?: HttpContext): Observable<number> {
    return this.updateArchivedStatusBook$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `loadBookById()` */
  static readonly LoadBookByIdPath = '/books/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loadBookById()` instead.
   *
   * This method doesn't expect any request body.
   */
  loadBookById$Response(params: LoadBookById$Params, context?: HttpContext): Observable<StrictHttpResponse<BookResponse>> {
    return loadBookById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loadBookById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loadBookById(params: LoadBookById$Params, context?: HttpContext): Observable<BookResponse> {
    return this.loadBookById$Response(params, context).pipe(
      map((r: StrictHttpResponse<BookResponse>): BookResponse => r.body)
    );
  }

  /** Path part for operation `loadAllReturnedBooks()` */
  static readonly LoadAllReturnedBooksPath = '/books/returned';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loadAllReturnedBooks()` instead.
   *
   * This method doesn't expect any request body.
   */
  loadAllReturnedBooks$Response(params?: LoadAllReturnedBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBorrowedBookResponse>> {
    return loadAllReturnedBooks(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loadAllReturnedBooks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loadAllReturnedBooks(params?: LoadAllReturnedBooks$Params, context?: HttpContext): Observable<PageResponseBorrowedBookResponse> {
    return this.loadAllReturnedBooks$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBorrowedBookResponse>): PageResponseBorrowedBookResponse => r.body)
    );
  }

  /** Path part for operation `loadAllBooksByOwner()` */
  static readonly LoadAllBooksByOwnerPath = '/books/owner';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loadAllBooksByOwner()` instead.
   *
   * This method doesn't expect any request body.
   */
  loadAllBooksByOwner$Response(params?: LoadAllBooksByOwner$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBookResponse>> {
    return loadAllBooksByOwner(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loadAllBooksByOwner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loadAllBooksByOwner(params?: LoadAllBooksByOwner$Params, context?: HttpContext): Observable<PageResponseBookResponse> {
    return this.loadAllBooksByOwner$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBookResponse>): PageResponseBookResponse => r.body)
    );
  }

  /** Path part for operation `loadAllBorrowedBooks()` */
  static readonly LoadAllBorrowedBooksPath = '/books/borrowed';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loadAllBorrowedBooks()` instead.
   *
   * This method doesn't expect any request body.
   */
  loadAllBorrowedBooks$Response(params?: LoadAllBorrowedBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBorrowedBookResponse>> {
    return loadAllBorrowedBooks(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loadAllBorrowedBooks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loadAllBorrowedBooks(params?: LoadAllBorrowedBooks$Params, context?: HttpContext): Observable<PageResponseBorrowedBookResponse> {
    return this.loadAllBorrowedBooks$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBorrowedBookResponse>): PageResponseBorrowedBookResponse => r.body)
    );
  }

}
