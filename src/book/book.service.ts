import { Injectable } from '@nestjs/common'
import { Book } from './data/book.dto'

@Injectable()
export class BookService {
  public book: Book[] = []

  //add
  addBook(book: Book): string {
    this.book.push(book)
    return 'book is added sucessfully'
  }

  //updatebook
  updateBook(book: Book): string {
    const idx = this.book.findIndex((item) => {
      return item.id === book.id
    })

    this.book[idx] = book
    return 'book update'
  }

  //deletebook
  deleteBook(id: string): string {
    this.book = this.book.filter((item) => {
      return id !== item.id
    })
    return 'delete book'
  }

  //getsinglebook
  getSingleBook(id: string): string {
    return this.book[id]
    return 'single book find'
  }

  //getAllBook
  getAllBook(): Book[] {
    return this.book
  }
}
