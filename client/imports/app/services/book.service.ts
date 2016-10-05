import { Injectable } from '@angular/core';
import { ObservableCursor } from 'meteor-rxjs';

import { Book } from '../../../../both/models/book.model';
import { BookCollection } from '../../../../both/collections/book.collection';

@Injectable()
export class BookService {
    private data : ObservableCursor<Book>;

    constructor() {
        this.data = BookCollection.find({});
    }

    public getData() : ObservableCursor<Book> {
        return this.data;
    }
}
