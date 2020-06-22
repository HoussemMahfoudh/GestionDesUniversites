import { Cours } from './cours';

export class Salle {

    numS:number;
    nomS:string;
    capacite:number;

    constructor(numS:number,nomS:string,capacite:number){
        this.numS=numS;
        this.nomS = nomS;
        this.capacite = capacite;
    }

}
