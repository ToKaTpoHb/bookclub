import { BookCollection } from "../../../both/collections/book.collection";

Meteor.publish (
  'books.all' , ()=>
  {
    return BookCollection.find ( {} )
  }
)

Meteor.publish (
  'books.one' , ( id : string )=>
  {
    return BookCollection.find ( { _id : id } )
  }
)