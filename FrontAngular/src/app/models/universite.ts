import { Departement } from './departement';

export class Universite {

    codeUNV:number
    nomUNV:String
    adresseSite:String
    departements:Departement[];

    constructor(code:number,nom:String,adr:String){
        this.codeUNV=code;
        this.nomUNV=nom;
        this.adresseSite=adr;
    }
}
