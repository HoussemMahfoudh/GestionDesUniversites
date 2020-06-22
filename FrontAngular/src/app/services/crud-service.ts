import {CrudOperation} from 'src/app/interfaces/crud-operation'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Departement } from '../models/departement';
import { identifierModuleUrl } from '@angular/compiler';
import { switchMap, debounceTime } from 'rxjs/operators';
import { Enseignant } from '../models/enseignant';
import { Etudiant } from '../models/etudiant';

export abstract class CrudService<T, ID> implements CrudOperation<T, ID> {


    constructor(private _http:HttpClient, private _base:string){}

    save(t:T):Observable<T>{
        return this._http.post<T>(this._base+"/add/", t);
    }

    update(id:ID, t:T):Observable<T>{
        return this._http.put<T>(this._base+"/update/"+id,t);
    }

    findOne(id:ID):Observable<T>{
        return this._http.get<T>(this._base+"/get/"+id);
    }

    findAll():Observable<T[]>{
        return this._http.get<T[]>(this._base+"/get");
        
    }

    delete(id:ID):Observable<T>{
        return this._http.delete<T>(this._base+"/delete/"+id);
    }

    getEnseignantDepartement(id:ID):Observable<Departement>{
        return this._http.get<Departement>(this._base+"/get/departement/"+id);
    }

    

}
