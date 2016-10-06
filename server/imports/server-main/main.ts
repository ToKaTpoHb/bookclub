import { DemoCollection } from '../../../both/collections/demo-collection';
import { DemoDataObject } from '../../../both/models/demo-data-object';
import {BookCollection} from "../../../both/collections/book.collection";
import {Book} from "../../../both/models/book.model";

export class Main {
  start(): void {
    this.initFakeData()
    this.initFakeBooks()
  }

  initFakeData(): void {
    if (DemoCollection.find({}).cursor.count() === 0) {
      const data: DemoDataObject[] = [{
        name: 'Dotan',
        age: 25
      }, {
        name: 'Liran',
        age: 26
      }, {
        name: 'Uri',
        age: 30
      }];
      
      data.forEach((obj: DemoDataObject) => {
        DemoCollection.insert(obj);
      });
    }
  }

  initFakeBooks()
  {
    if(BookCollection.find({}).cursor.count() === 0)
    {
      // http://beta.json-generator.com/Vyds811R-
      const books: Book[] = [
        {
          "author": "English Barlow",
          "name": "Enim non commodo id",
          "cover": "http://placehold.it/240x320",
          "description": "Pariatur aute elit ipsum occaecat nisi aliquip ex labore aliquip in magna officia eu sit. Exercitation nisi deserunt consectetur veniam occaecat excepteur velit nulla nulla veniam pariatur qui duis amet. Commodo velit qui quis Lorem cupidatat aliqua Lorem tempor minim Lorem reprehenderit. Magna quis adipisicing duis occaecat velit id."
        },
        {
          "author": "Dillon Bullock",
          "name": "Enim proident elit aliqua",
          "cover": "http://placehold.it/240x320",
          "description": "Duis ex et sunt voluptate aliquip nostrud voluptate exercitation elit nostrud. Velit velit officia amet elit Lorem ad elit nulla laborum reprehenderit. Ad exercitation magna sint ullamco consequat consectetur ex deserunt cupidatat veniam cillum ipsum. Nulla tempor elit cupidatat laborum excepteur ut velit proident aute fugiat. Et reprehenderit quis magna esse duis tempor sit eu nostrud tempor incididunt et."
        },
        {
          "author": "Anna Fox",
          "name": "Veniam laborum sunt officia",
          "cover": "http://placehold.it/240x320",
          "description": "Magna anim excepteur ex excepteur irure incididunt nostrud commodo ipsum eu tempor ipsum. Do eiusmod magna consequat duis nisi veniam officia sit excepteur Lorem commodo. Ea duis veniam id anim officia proident amet et laboris do fugiat. Qui laborum voluptate et voluptate et qui quis proident eu voluptate sit pariatur magna sit. Nostrud fugiat ut Lorem dolore irure deserunt proident elit labore consequat amet duis officia. Sint nulla est magna minim mollit nulla labore fugiat. Labore cillum in mollit ea irure."
        },
        {
          "author": "Ida Perkins",
          "name": "Aliquip non mollit anim",
          "cover": "http://placehold.it/240x320",
          "description": "Irure labore elit ad magna consectetur et dolore dolore duis eiusmod laborum culpa. Exercitation qui reprehenderit commodo aliqua exercitation irure deserunt dolor magna. Quis ea exercitation Lorem pariatur."
        },
        {
          "author": "Sanford Davis",
          "name": "Occaecat cupidatat sit labore",
          "cover": "http://placehold.it/240x320",
          "description": "Occaecat aute nulla amet magna voluptate tempor. Nisi sint quis culpa incididunt sit id magna eu. Aliqua excepteur enim excepteur aliquip minim nostrud."
        }
      ]

      books.forEach((book: Book)=>{
        BookCollection.insert(book)
      })
    }
  }
}
