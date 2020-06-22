import { Injectable } from '@angular/core';
import { CrudService } from './crud-service';
import { HttpClient } from '@angular/common/http';
import { Cours } from '../models/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService extends CrudService<Cours,number> {

  constructor(_http:HttpClient) {
    super(_http,"http://127.0.0.1:8080/cours");
  }
}
