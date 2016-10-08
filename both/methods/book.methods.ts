import { Book } from "../models/book.model";
import { BookCollection } from "../collections/book.collection";

Meteor.methods (
  {
    book_add : ( book : Book ) =>
    {
      return BookCollection.insert(book)
    }
  }
)