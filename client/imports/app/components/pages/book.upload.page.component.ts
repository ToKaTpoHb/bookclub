import { Component , ViewChild } from "@angular/core";
import { Book } from "../../../../../both/models/book.model";
import { UploadFS } from "meteor/jalik:ufs";
import { uploadCover } from "../../../../../both/methods/covers.methods";
import { uploadBookFile } from "../../../../../both/methods/bookfiles.methods";
import { BookService } from "../../services/book.service";

@Component (
  {
    selector : 'app-book-upload' ,
    template : `
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <div class="page-header">
        <h1>Загрузка книги</h1>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-sm-5">
      <div class="thumbnail">
        <img [src]="newCoverBase ? newCoverBase : 'img/click-to-load.png'" width="100%"
             alt="Клик для загрузки изображения" (click)="onImgClick()">
      </div>
    </div>
    <div class="col-xs-12 col-sm-7">
      <div class="panel panel-default">
        <div class="panel-heading">
          Введите информацию
        </div>
        <div class="panel-body">
          <form (submit)="uploadBook()">
            <div class="input-group">
              <span class="input-group-addon" id="book-author-span"><i class="glyphicon glyphicon-user"></i></span>
              <input name="book_author"
                     [ngClass]="{'input-error': !(authorValidRule()), 'input-valid': (authorValidRule())}"
                     [(ngModel)]="bookToAdd.author" type="text" class="form-control" placeholder="Имя и фамилия автора"
                     aria-describedby="author-name-span">
            </div>
            <div
              [hidden]="authorValidRule()"
              class="alert alert-danger"
              style="margin-top: 5px;"
            >
              Это поле должно быть длинной минимум 2 символа
            </div>
            <div class="input-group">
              <span class="input-group-addon" id="book-name-span"><i class="glyphicon glyphicon-book"></i></span>
              <input name="book_name" [(ngModel)]="bookToAdd.name" type="text" class="form-control"
                     placeholder="Название книги" aria-describedby="book-name-span"
                     [ngClass]="{'input-error': !(nameValidRule()), 'input-valid': (nameValidRule())}">
            </div>
            <div
              [hidden]="nameValidRule()"
              class="alert alert-danger"
              style="margin-top: 5px;"
            >
              Это поле должно быть длинной минимум 2 символа
            </div>
            <div class="input-group">
              <span class="input-group-addon" id="book-file-span"><i class="glyphicon glyphicon-paperclip"></i></span>
              <input [(ngModel)]="bookToAdd.file" name="book_file" class="form-control" aria-describedby="book-file-span" 
                     [ngClass]="{'input-error': !(fileValidRule()), 'input-valid': (fileValidRule())}" type="file"
                     (change)="onBookFileChange($event)" #selectedFileForBook>
            </div>
            <div
              [hidden]="fileValidRule()"
              class="alert alert-danger"
              style="margin-top: 5px;"
            >
               Файл должен быть в формате pdf
            </div>
            <textarea [(ngModel)]="bookToAdd.description" name="book_description" class="form-control"
                      style="resize: none; min-height: 150px;" placeholder="Описание к книге"></textarea>
            <div class="btn btn-danger">Назад</div>
            <input type="submit" class="pull-right btn btn-primary" value="Вперед, к книге!">
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <pre>{{bookToAdd | json}}</pre>
    </div>
  </div>
</div>
`
  }
)

export class BookUploadPageComponent
{
  @ViewChild ( 'selectedFileForBook' ) selectedFileForBook;
  
  newCoverBase : string
  bookToAdd : Book = {
    author      : '' ,
    name        : '' ,
    description : '' ,
    cover       : '' ,
    file        : ''
  }
  
  bookFileToUpload : File
  bookCoverToUpload : File
  
  constructor (
    private bookService : BookService
  )
  {}
  
  authorValidRule () : boolean
  {
    return this.bookToAdd.author && this.bookToAdd.author.length > 2
  }
  
  nameValidRule () : boolean
  {
    return this.bookToAdd.name && this.bookToAdd.name.length > 2
  }
  
  fileValidRule () : boolean
  {
    return ! ! this.bookToAdd.file
  }
  
  onBookFileChange ( $event )
  {
    let file : File = $event.target.files[ 0 ]
    if ( file.type != 'application/pdf' )
    {
      this.bookToAdd.file = ''
    }
    else
    {
      this.bookToAdd.file   = file.name
      this.bookFileToUpload = file
    }
  }
  
  onImgClick ()
  {
    UploadFS.selectFiles (
      ( file : File ) =>
      {
        if ( file.type.indexOf ( 'image/' ) != 0 )
        {
          this.bookToAdd.cover = ''
          this.newCoverBase    = ''
          return;
        }
        
        this.bookToAdd.cover   = file.name
        this.bookCoverToUpload = file
        
        let reader = new FileReader ()
        
        reader.onload =
          ( e : any ) =>
          {
            this.newCoverBase = e.target.result
          };
        
        reader.readAsDataURL ( file )
      }
    )
  }
  
  uploadBookCover ( cb )
  {
    if ( this.bookToAdd.cover == '' )
      return;
    
    //noinspection TypeScriptUnresolvedFunction
    uploadCover ( this.bookCoverToUpload )
      .then ( cb )
  }
  
  uploadBookFile ( cb )
  {
    if ( this.bookToAdd.file == '' )
      cb ( { path : '' } );
    
    //noinspection TypeScriptUnresolvedFunction
    uploadBookFile ( this.bookFileToUpload )
      .then ( cb )
  }
  
  uploadBook ()
  {
    this.uploadBookCover (
      ( result )=>
      {
        console.log ( result )
        this.bookToAdd.cover = result.path
        
        this.uploadBookFile (
          ( result )=>
          {
            console.log ( result )
            
            this.bookToAdd.file = result.path
            
            //noinspection TypeScriptUnresolvedFunction
            this.bookService.addBook (
              this.bookToAdd , ( err , res ) =>
              {
                console.log ( err )
              }
            )
            
          }
        )
      }
    )
  }
  
}