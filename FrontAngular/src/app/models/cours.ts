import { Etudiant } from './etudiant';
import { Enseignant } from './enseignant';
import { Salle } from './salle';

export class Cours {
    codeC:number;
    libelleC:string;
    salles:Salle[]

    constructor(code:number,libelle:string,salle:Salle[]){
        this.codeC = code;
        this.libelleC = libelle;
        this.salles = salle;
    }
}
