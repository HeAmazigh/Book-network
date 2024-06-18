import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../services/services';
import { Router } from '@angular/router';
import {
  BookResponse,
  PageResponseBookResponse,
} from '../../../../services/models';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  page: number = 0;
  size: number = 5;
  bookResponse: PageResponseBookResponse = {};
  pages: any = [];
  message = '';
  level: 'success' | 'error' = 'success';

  get isLastPage() {
    return this.page === (this.bookResponse.totalPages as number) - 1;
  }

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.fetchAllBooks();
  }

  fetchAllBooks() {
    this.bookService
      .loadAllBooks({
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

  displayBookDetails(book: BookResponse) {
    this.router.navigate(['books', 'details', book.id]);
  }
  borrowBook(book: BookResponse) {
    this.message = '';
    this.level = 'success';
    this.bookService.borrowBook({ bookId: book.id as number }).subscribe({
      next: () => {
        this.level = 'success';
        this.message = 'Book successfully added to your list';
      },
      error: (err) => {
        console.log(err);
        this.level = 'error';
        this.message = err.error.error;
      },
    });
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
