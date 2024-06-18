import { Component, OnInit } from '@angular/core';
import {
  BookResponse,
  PageResponseBookResponse,
} from '../../../../services/models';
import { BookService } from '../../../../services/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrl: './my-books.component.scss',
})
export class MyBooksComponent implements OnInit {
  page: number = 0;
  size: number = 5;
  bookResponse: PageResponseBookResponse = {};
  pages: any = [];

  get isLastPage() {
    return this.page === (this.bookResponse.totalPages as number) - 1;
  }

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.fetchAllBooks();
  }

  fetchAllBooks() {
    this.bookService
      .loadAllBooksByOwner({
        pageNo: this.page,
        pageSize: this.size,
      })
      .subscribe({
        next: (books: PageResponseBookResponse) => {
          this.bookResponse = books;
          this.pages = Array(this.bookResponse.totalPages)
            .fill(0)
            .map((x, i) => i);
        },
      });
  }

  archiveBook(book: BookResponse) {
    this.bookService
      .updateArchivedStatusBook({
        bookId: book.id as number,
      })
      .subscribe({
        next: () => {
          book.archived = !book.archived;
        },
      });
  }

  shareBook(book: BookResponse) {
    this.bookService
      .updateShareableStatusBook({
        bookId: book.id as number,
      })
      .subscribe({
        next: () => {
          book.shareable = !book.shareable;
        },
      });
  }

  editBook(book: BookResponse) {
    this.router.navigate(['books', 'manage', book.id]);
  }

  displayBookDetails(book: BookResponse) {
    this.router.navigate(['books', 'details', book.id]);
  }

  gotToPage(page: any) {
    this.page = page;
    this.fetchAllBooks();
  }
  goToPreviousPage() {
    this.page--;
    this.fetchAllBooks();
  }

  goToFirstPage() {
    this.page = 0;
    this.fetchAllBooks();
  }

  goToNextPage() {
    this.page++;
    this.fetchAllBooks();
  }

  goToLastPage() {
    this.page = (this.bookResponse.totalPages as number) - 1;
    this.fetchAllBooks();
  }
}
