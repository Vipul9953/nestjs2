import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Book } from './data/book.dto'
import { BookService } from './book.service'

@Controller('/book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('/getallbook')
  getAllBook(): Book[] {
    return this.bookService.getAllBook()
  }

  @Post('/add/book')
  addBook(@Body() bookobj: Book): string {
    return this.bookService.addBook(bookobj)
  }

  @Put('/update')
  updatBook(@Body() bookobj: Book): string {
    return this.bookService.updateBook(bookobj)
  }

  @Delete('/delete/:id')
  deleteBook(@Param('id') bookId: string): string {
    return this.bookService.deleteBook(bookId)
  }

  @Get('/single/book/:id')
  getSingleBook(@Param('id') bookId: string): string {
    return this.bookService.getSingleBook(bookId)
  }
}
