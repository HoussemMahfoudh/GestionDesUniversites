import { Universite } from './universite';
import { Enseignant } from './enseignant';

export class Departement {

    codeDEP:number;
    nomDEP:string;
    universite:Universite;
    //enseignants:Enseignant[];

    constructor (code:number, nom:string, univer:Universite){
        this.codeDEP=code;
        this.nomDEP=nom;
        this.universite=univer;
    }

    public setCodeDEP(code:number){
        this.codeDEP=code;
    }
    public setNomDEP(nom:string){
        this.nomDEP=nom;
    }
    public setUniversite(univ:Universite){
        this.universite=univ;
    }
}
