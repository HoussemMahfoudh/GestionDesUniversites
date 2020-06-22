import { Injectable } from '@angular/core';
import { CrudService } from './crud-service';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService extends CrudService<Etudiant,number>{

  constructor(_http:HttpClient) { 
    super(_http,"http://127.0.0.1:8080/etudiant");
  }
}
