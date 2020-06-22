import { Injectable } from '@angular/core';
import { CrudService } from './crud-service';
import { Salle } from '../models/salle';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalleService extends CrudService<Salle,number> {

  constructor(_http:HttpClient) { 
    super(_http,"http://127.0.0.1:8080/salle");
  }
}
