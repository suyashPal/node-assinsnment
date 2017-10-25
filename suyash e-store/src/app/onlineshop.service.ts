import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class OnlineshopService {

  constructor(private http:Http) { }
  getAllUser()
    {
      return this.http.get('http://localhost:1000/api/v1/user/getAllUser').map(res => res.json())
      .do(data => console.log(data))
      .catch(this.handleError);
    }
    addUser(user)
           {
            console.log(user);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
             //let body = JSON.stringify(user);
           // console.log(body);
            return this.http.post('http://localhost:1000/api/v1/user/create',user,options)
            .do(data => console.log(data))
            .catch(this.handleError).
            subscribe();
           }

         getAllProduct()
         {
           return this.http.get('http://localhost:1000/api/v1/product/getAllproducts').map(res => res.json())
           .do(data => console.log(data))
           .catch(this.handleError);
         }
         private handleError(error: Response)
         {
            console.error(error);
              let message = `Error status code ${error.status} at ${error.url}`;
                return Observable.throw(message);
          }
}
