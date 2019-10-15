import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private REST_API_URL: string = "https://jsonplaceholder.typicode.com/users";

  constructor(  private http: HttpClient) { }

  createEmployee( employeeData: any) { // 1. get the data from comp 
    console.log(employeeData);

    // 2. send the above data to rest api
      // 2.1 identify the rest api url
      // 2.2 send the data using POST method via a REST API Client
    let promise = new Promise( (resolve, reject) => {
      this.http.post(this.REST_API_URL, employeeData)
        .toPromise()
        .then( (res) => { // 3. get the resp from rest api
          console.log(res);
          resolve(res); // upon fullfillment
        })
        .catch( (err) => { // get the err from rest api
          console.log(err);
          reject(err); // upon failure/rejection
        })
        .finally( ( ) => {
          console.log("Ends");
        });
    });
    return promise; // 4. send it back to the component
  }

  getEmployees() {
    return this.http.get(this.REST_API_URL)
      .pipe( map(res => {  // 3. get res from rest api
        console.log( res);
        return res; // 4. send it back to comp
      }));
  }


  getEmployeeById( id){
    console.log("id is " + id);
    return this.http.get(this.REST_API_URL + '/' + id)
      .pipe( map( res => {
        console.log( res );
        return res;
      }));
  }

  updateEmployee( employeeData ) {
    let _url = this.REST_API_URL + '/' + employeeData.id;
    
    let promise = new Promise( (resolve, reject) => {
      this.http.put( _url , employeeData)
        .toPromise()
        .then( (res) => { // 3. get the resp from rest api
          console.log(res);
          resolve(res); // upon fullfillment
        })
        .catch( (err) => { // get the err from rest api
          console.log(err);
          reject(err); // upon failure/rejection
        })
        .finally( ( ) => {
          console.log("Ends");
        });
    });
    return promise; // 4. send it back to the component
  }
}
