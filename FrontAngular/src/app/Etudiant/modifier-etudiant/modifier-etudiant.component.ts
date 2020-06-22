import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';
import { Router, ActivatedRoute } from '@angular/router';
import { Enseignant } from 'src/app/models/enseignant';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { Cours } from 'src/app/models/cours';

@Component({
  selector: 'app-modifier-etudiant',
  templateUrl: './modifier-etudiant.component.html',
  styleUrls: ['./modifier-etudiant.component.css']
})
export class ModifierEtudiantComponent implements OnInit {

  public etudiant:Etudiant;
  public enseignants:Enseignant[]; //array to get all enseignants
  public ensChecked:Enseignant[] ; // to get all enseignants of this etudiant
  public ensCheckedChanged:Enseignant[] = [];
  public id:number;
  public coursChecked:Cours[] = [];

  constructor(private ensService:EnseignantService, private etudService:EtudiantService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getEtudiant();
    this.getEnseignant();
    setTimeout(() => {  this.getEnsByEtudiant(); }, 500);
  }

  public getEtudiant(){
    this.id = this.activatedRoute.snapshot.params["id"];
    this.etudService.findOne(this.id).subscribe(data=>{
      this.etudiant = data;
      console.log(this.etudiant);
    })
  }

  public getEnseignant(){
    this.ensService.findAll().subscribe(data=>{
      this.enseignants=data;
      console.log(this.enseignants);
    },err=>(console.log(err)))
  }

//   public getEnseignantByCourse(idCours:number){
//   //   this.ensService.findAll().subscribe(data=>{
//   //     this.enseignants=data;
//   //     let enseignantCherche=this.enseignants.filter((el:Enseignant)=>{
//   //       return el.cours.codeC==idCours;
//   //     })
//   //     this.ensChecked.push(enseignantCherche[0]);

//   //   },err=>(console.log(err)))
//  }

  public getEnsByEtudiant(){
    this.ensService.getEnseignantByEtudiant(this.etudiant.numInscription).subscribe(data=>{
      this.ensChecked = data;
      console.log(this.ensChecked);
      this.ensChecked.forEach(ens=>(this.coursChecked.push(ens.cours)))
    })
    return this.ensChecked;
  }


  public updateEtudiant(value:any){
    let etu:Etudiant;
    this.etudiant = new Etudiant(this.id,value.nomETU,value.prenomETU,value.adresseETU,value.dateEntree,this.ensChecked,this.coursChecked)
    console.log("Etudiant Updated = ",this.etudiant)
    this.etudService.update(this.id,this.etudiant).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl("/etudiant/lister");
    },err=>(console.log(err)))
  }

  onChange(ens: Enseignant, checked: boolean) {
    console.log(ens, "checked "+checked);
    if (checked) {
      this.ensChecked.push(ens);
      this.coursChecked.push(ens.cours)
      console.log("ENS Checked",this.ensChecked)
      console.log("Cours checked",this.coursChecked)
    } else {
      let index = this.ensChecked.indexOf(ens);
      let indexC = this.coursChecked.indexOf(ens.cours)
      this.ensChecked.splice(index, 1);
      this.coursChecked.splice(index, 1);
      console.log("ens unchecked",this.ensChecked)
      console.log("cours unchecked",this.coursChecked)
    }
  }

  isSelected(i:number,ens:Enseignant){
    let temp = this.enseignants[i];
    if(this.ensChecked.findIndex(x=> x.matricule == temp.matricule) >= 0){
      return true
    }else{
      return false;
    }
  }


  inputChecked(data){
    let checked = false;
    console.log("Ens checked : " + this.ensChecked);
    for (let i = 0; i < this.enseignants.length; i++){
      let temp = this.enseignants[i];
      console.log('inside =',temp);
      if (this.ensChecked.findIndex(x=> x.matricule == temp.matricule) >= 0){
        console.log("Index =",this.enseignants.findIndex(x=> x.matricule == temp.matricule));
        checked = true;
      } 
    }
    return checked;
  }

}
