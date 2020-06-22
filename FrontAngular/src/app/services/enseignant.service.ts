import { Injectable } from '@angular/core';
import { CrudService } from './crud-service';
import { Enseignant } from '../models/enseignant';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../models/etudiant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService extends CrudService<Enseignant,number>{
  
  readonly host = "http://127.0.0.1:8080/etudiant";
  constructor( _http:HttpClient, public httpClient:HttpClient) {
    super(_http,"http://127.0.0.1:8080/enseignant");
  }

  public getEnseignantByEtudiant(id:number){
    return this.httpClient.get<Enseignant[]>(this.host+"/getEnseignant/"+id);
  }

}

