import { Component , Input } from "@angular/core";
import { Book } from "../../../../../both/models/book.model";
@Component (
  {
    selector : 'app-book-details' ,
    template : `
<div class="container">
  <div
    class="row"
    *ngIf="bookExists()"
  >
    <div class="page-header">
      <h1>
        {{book.author}}
      </h1>
    </div>
  </div>
  <div
    class="row"
    *ngIf="bookExists()"
  >
    <div class="col-xs-12 col-sm-4">
      <div class="thumbnail">
        <img [src]="defaultImage" [lazyLoad]="book.cover" [offset]="100" alt="{{book.name + ' image'}}" width="100%">
      </div>
    </div>
    <div class="col-xs-12 col-sm-8">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h2 class="panel-title">{{book.name}}</h2>
        </div>
        <div class="panel-body">
          {{book.description}}
        </div>
        <div class="panel-footer">
          <a [routerLink]="['/book-read', book._id]" class="btn btn-primary">Читать</a>
        </div>
      </div>
    </div>
  </div>
</div>
`
  }
)

export class BookDetailsComponent
{
  @Input () book : Book
            defaultImage : string = 'img/loading.png'
  
  constructor () {}
  
  bookExists () : boolean
  {
    return ! (
      typeof this.book === 'undefined'
    )
  }
  
}