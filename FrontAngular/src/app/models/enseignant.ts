import { Departement } from './departement';
import { Cours } from './cours';

export class Enseignant {

    matricule:number;
    nomENS:string;
    prenomENS:string;
    adresseENS:string;
    diplome:string;
    departement:Departement;
    cours:Cours;

    constructor (mat:number, nom:string, prenom:string, adr:string, diplome:string, dep:Departement,cours:Cours){
        this.matricule=mat;
        this.nomENS=nom;
        this.prenomENS=prenom;
        this.adresseENS=adr;
        this.diplome=diplome;
        this.departement=dep;
        this.cours = cours;
    }

    
}
