import { MongoObservable } from 'meteor-rxjs';
import { BookFile } from "../models/bookfile.model";
import { UploadFS } from 'meteor/jalik:ufs';

export const BookFiles = new MongoObservable.Collection<BookFile> ( 'bookfiles' );

function loggedIn ()
{
  //placeholder
  return true;
}

BookFiles.collection.allow (
  {
    insert : loggedIn ,
    update : loggedIn ,
    remove : loggedIn
  }
);

export const BookFilesStore = new UploadFS.store.Local (
  {
    collection : BookFiles.collection ,
    name       : 'bookfiles' ,
    path       : '/uploads/bookfiles' ,
    filter     : new UploadFS.Filter (
      {
        contentTypes : [ 'application/pdf' ]
      }
    )
  }
);