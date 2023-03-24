import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { load } from 'js-yaml';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private http: HttpClient) { }

  getContent<T = object>(fileName: string): Observable<T | unknown> {
    return this.http
      .get(`assets/content/pages/${fileName}.yaml`, {
        observe: 'body',
        responseType: 'text',
      })
      .pipe(map((yamlString) => load(yamlString)));
  }
}