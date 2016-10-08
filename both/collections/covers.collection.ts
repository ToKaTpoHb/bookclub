import { MongoObservable } from 'meteor-rxjs';
import { Cover } from "../models/cover.model";
import { UploadFS } from 'meteor/jalik:ufs';

export const Covers = new MongoObservable.Collection<Cover> ( 'images' );

function loggedIn ()
{
  //placeholder
  return true;
}

Covers.collection.allow (
  {
    insert : loggedIn ,
    update : loggedIn ,
    remove : loggedIn
  }
);

export const CoversStore = new UploadFS.store.Local (
  {
    collection : Covers.collection ,
    name       : 'covers' ,
    path       : '/uploads/covers' ,
    filter     : new UploadFS.Filter (
      {
        contentTypes : [ 'image/*' ]
      }
    )
  }
);