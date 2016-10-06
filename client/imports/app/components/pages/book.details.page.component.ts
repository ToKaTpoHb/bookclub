import { Component , OnInit , OnDestroy } from "@angular/core";
import { BookService } from "../../services/book.service";
import { Book } from "../../../../../both/models/book.model";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import autorun = Tracker.autorun;
import { MeteorComponent } from "angular2-meteor";

@Component (
  {
    selector : 'app-book-details-page' ,
    template : `<app-book-details [book]="book"></app-book-details>`
  }
)

export class BookDetailsPageComponent extends MeteorComponent implements OnInit, OnDestroy
{
  book : Book
  book_id : string
  paramsSub : any
  
  constructor (
    private bookService : BookService ,
    private route : ActivatedRoute
  )
  {
    super ()
  }
  
  ngOnInit ()
  {
    
    this.paramsSub = this.route.params
                         .map ( params=>params[ 'id' ] )
                         .subscribe (
                           book_id=>
                           {
                             this.book_id = book_id
                             this.book    = this.bookService.getBook ( book_id )
        
                             this.subscribe (
                               'books.one' , book_id , ()=>
                               {
                                 this.autorun (
                                   ()=>
                                   {
                                     this.book = this.bookService.getBook ( book_id )
                                   }
                                 )
                               }
                             )
                           }
                         )
  }
  
  ngOnDestroy ()
  {
    this.paramsSub.unsubscribe ()
  }
}