import {Component, Input} from '@angular/core'
import {Book} from "../../../../../both/models/book.model";
import {Observable} from "rxjs";

@Component({
    selector: 'app-books',
    template: `
<div class="page-header">
    <h1>Все книги</h1>
</div>
<div class="row is-flex">
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
         *ngFor="let book of books | async"
    >
        <div class="panel panel-default "
             style="height: 100%; cursor: pointer;"
             [routerLink]="['/books','view', book._id]"
             
        >
            <div class="panel-heading">{{book.name}}</div>

            <div class="thumbnail" style="border: 0;">
                <img [src]="defaultImage" [lazyLoad]="book.cover" [offset]="100" alt="{{book.name + ' image'}}">
            </div>

            <div class="panel-body">
                <div class="row">
                    <div class="col-xs-12">
                        {{book.description}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`
})

export class BooksComponent
{
    defaultImage: string = 'img/loading.png';
    @Input() books: Observable<Book[]>;
}