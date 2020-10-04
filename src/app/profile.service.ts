import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
// import {Http, Headers} from '@ngular/common/http';

import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  // private token = 'ae1ffddc9642bdf0688a9d76f7c381e9d7adb1c6';


  constructor(private http:HttpClient) {
    console.log("service is now ready");
    this.username = "kipkoech-msojo";
    
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + 'ae1ffddc9642bdf0688a9d76f7c381e9d7adb1c6').map((res: Response) => res.json())
     ;
   }
}
