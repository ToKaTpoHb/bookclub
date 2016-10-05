import { MongoObservable } from 'meteor-rxjs';
import { Book } from '../models/book.model';

export const BookCollection = new MongoObservable.Collection<Book>('books');