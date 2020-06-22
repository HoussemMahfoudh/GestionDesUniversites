import { Enseignant } from './enseignant';
import { Cours } from './cours';

export class Etudiant {
    numInscription:number;
	nomETU:string;
	prenomETU:string;
	adresseETU:string;
    dateEntree:Date;
    enseignants:Enseignant[];
    cours:Cours[];

    constructor (num:number,nom:string,prenom:string,adr:string,date:Date,ens:Enseignant[],cours:Cours[]){
        this.numInscription = num;
        this.nomETU=nom;
        this.prenomETU=prenom;
        this.adresseETU=adr;
        this.dateEntree=date;
        this.enseignants=ens;
        this.cours = cours;
    }
}
