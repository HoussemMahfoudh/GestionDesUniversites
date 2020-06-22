import { Injectable } from '@angular/core';
import { CrudService } from './crud-service';
import { Universite } from '../models/universite';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversiteServiceService extends CrudService<Universite,number>{

  constructor(_http:HttpClient){
    super(_http,"http://127.0.0.1:8080/universite");
    }

}