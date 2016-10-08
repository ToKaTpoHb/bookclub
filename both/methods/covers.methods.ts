import { UploadFS } from 'meteor/jalik:ufs';
import { CoversStore } from "../collections/covers.collection";

//noinspection TypeScriptUnresolvedVariable
export function uploadCover(data: File): Promise<any> {
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
      store: CoversStore,
      onError: reject,
      onComplete: resolve
    });
    
    upload.start();
  });
}