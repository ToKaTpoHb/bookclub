import { UploadFS } from 'meteor/jalik:ufs';
import { BookFilesStore } from "../collections/bookfiles.collection";


//noinspection TypeScriptUnresolvedVariable
export function uploadBookFile(data: File): Promise<any> {
  //noinspection TypeScriptUnresolvedFunction
  return new Promise((resolve, reject) => {
    // pick from an object only: name, type and size
    const file = {
      name: data.name,
      type: data.type,
      size: data.size,
    };
    
    const upload = new UploadFS.Uploader({
      data,
      file,
      store: BookFilesStore,
      onError: reject,
      onComplete: resolve
    });
    
    upload.start();
  });
}