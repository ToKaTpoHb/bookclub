import {Component, OnInit} from '@angular/core'
import {BookService} from "../../services/book.service";
import {Observable} from "rxjs";
import {Book} from "../../../../../both/models/book.model";

@Component({
    selector: 'app-books-page',
    template: `
<div class="container">
<div class="row">
<div class="col-sm-12">
<app-books [books]="books"></app-books>
</div>
</div>
</div>
`
})

export class BookPageComponent implements OnInit{
    books: Observable<Book[]>;

    constructor(
        private bookService: BookService
    ){}

    ngOnInit()
    {
        this.books = this.bookService.getAllBooks().zone()
    }
}