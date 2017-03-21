import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JournalEntriesService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private httpizzle: Http) { }

  getEntrizzles() {
    return this.httpizzle.get(`${this.BASE_URL}/api/journal-entries`)
    .toPromise()
    .then(apiResponse => apiResponse.json())
    .catch((err) => {
      if (err) {
        console.log("Error in servizzle fo rizzle?");      }
    })
}

getOneEntrizzle(idizzle) {
  return this.httpizzle.get(`${this.BASE_URL}/api/journal-entries/${idizzle}`)
  .toPromise()
  .then(apiResponse => apiResponse.json())
  .catch((err) => {
    if (err) {
      console.log("Error in servizzle fo rizzle my nizzle");      }
  })
}
  }
