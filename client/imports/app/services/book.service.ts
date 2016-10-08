import { Injectable } from '@angular/core';
import { ObservableCursor } from 'meteor-rxjs';

import { Book } from '../../../../both/models/book.model';
import { BookCollection } from '../../../../both/collections/book.collection';
import subscribe = Meteor.subscribe;

@Injectable ()
export class BookService
{
  private data : ObservableCursor<Book>;
  
  constructor ()
  {
    this.data = BookCollection.find ( {} );
    
    subscribe (
      'books.all' , ()=>
      {
        this.data = BookCollection.find ( {} );
      }
    )
  }
  
  public getAllBooks () : ObservableCursor<Book>
  {
    return this.data;
  }
  
  public getBook ( id : string ) : Book
  {
    return BookCollection.findOne ( { _id : id } )
  }
  
  
  public addBook ( book : Book, cb )
  {
    //noinspection TypeScriptUnresolvedFunction
    BookCollection.insert(book)
      .then(cb)
  }
}
