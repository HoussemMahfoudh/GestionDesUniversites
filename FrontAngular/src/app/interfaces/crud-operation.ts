import { Observable } from 'rxjs';
import { Departement } from '../models/departement';
import { Enseignant } from '../models/enseignant';
import { Etudiant } from '../models/etudiant';

export interface CrudOperation<T, ID> {
    save(t:T):Observable<T>;
    update(id:ID,t:T):Observable<T>;
    findOne(id:ID):Observable<T>;
    findAll():Observable<T[]>;
    delete(id:ID):Observable<any>;
    getEnseignantDepartement(id:ID):Observable<Departement>;
}
