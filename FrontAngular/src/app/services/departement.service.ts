import { Injectable } from '@angular/core';
import { CrudService } from './crud-service';
import { Departement } from '../models/departement';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartementService extends CrudService<Departement,number>{

  constructor(_http: HttpClient ) { 
    super(_http,"http://127.0.0.1:8080/departement");
  }
}
