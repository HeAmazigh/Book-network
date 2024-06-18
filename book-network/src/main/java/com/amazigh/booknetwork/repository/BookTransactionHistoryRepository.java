package com.amazigh.booknetwork.repository;

import com.amazigh.booknetwork.domain.BookTransactionHistory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface BookTransactionHistoryRepository extends JpaRepository<BookTransactionHistory, Integer> {

  @Query("""
            SELECT
            (COUNT (*) > 0) AS isBorrowed
            FROM BookTransactionHistory bookTransactionHistory
            WHERE bookTransactionHistory.user.id = :userId
            AND bookTransactionHistory.book.id = :bookId
            AND bookTransactionHistory.returnedApproved = false
            """)
  boolean isAlreadyBorrowedByUser(@Param("bookId") Integer bookId, @Param("userId") Integer userId);

  @Query("""
            SELECT
            (COUNT (*) > 0) AS isBorrowed
            FROM BookTransactionHistory bookTransactionHistory
            WHERE bookTransactionHistory.book.id = :bookId
            AND bookTransactionHistory.returnedApproved = false
            """)
  boolean isAlreadyBorrowed(@Param("bookId") Integer bookId);

  @Query("""
            SELECT transaction
            FROM BookTransactionHistory  transaction
            WHERE transaction.user.id = :userId
            AND transaction.book.id = :bookId
            AND transaction.returned = false
            AND transaction.returnedApproved = false
            """)
  Optional<BookTransactionHistory> findByBookIdAndUserId(@Param("bookId") Integer bookId, @Param("userId") Integer userId);

  @Query("""
            SELECT transaction
            FROM BookTransactionHistory  transaction
            WHERE transaction.book.owner.id = :userId
            AND transaction.book.id = :bookId
            AND transaction.returned = true
            AND transaction.returnedApproved = false
            """)
  Optional<BookTransactionHistory> findByBookIdAndOwnerId(@Param("bookId") Integer bookId, @Param("userId") Integer userId);

  @Query("""
            SELECT history
            FROM BookTransactionHistory history
            WHERE history.user.id = :userId
            """)
  Page<BookTransactionHistory> findAllBorrowedBooks(Pageable pageable, Integer userId);
  @Query("""
            SELECT history
            FROM BookTransactionHistory history
            WHERE history.book.owner.id = :userId
            """)
  Page<BookTransactionHistory> findAllReturnedBooks(Pageable pageable, Integer userId);
}
