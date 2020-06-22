import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { Enseignant } from 'src/app/models/enseignant';
import { Etudiant } from 'src/app/models/etudiant';
import { CoursService } from 'src/app/services/cours.service';
import { Cours } from 'src/app/models/cours';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent implements OnInit {

  public enseignants:Enseignant[]= [];
  public enseignant: Enseignant;
  public enseignantsChoisit:Enseignant[]=[];
  public coursList:Cours[];
  public coursChecked:Cours[] = [];
  //2020-06-04T19:51:09.891+0000
  public etudiant:Etudiant = null;

  public ensChecked:Enseignant[] = []
  mode:number=1;

  constructor(private etudService:EtudiantService, private ensService:EnseignantService, private courService:CoursService) { }

  ngOnInit(): void {
    this.getEnseignants();
    //this.getCours();
  }

  public getEnseignants(){
    this.ensService.findAll().subscribe(data=>{
      this.enseignants = data;
    })
  }

  public onChange(ens:Enseignant){
    this.enseignantsChoisit.push(ens);
    console.log(ens);
    console.log(this.enseignantsChoisit);
  }

  public addEtudiant(e:Etudiant){
    e.enseignants = this.ensChecked;
    e.cours = this.coursChecked;
    this.etudiant= e ;
    //this.etudiant = new Etudiant(e.numInscription,e.nomETU, e.prenomETU, e.adresseETU, e.dateEntree,this.enseignantsChoisit);
    console.log(e);
    this.etudService.save(e).subscribe(data=>{
      this.mode=2;
      console.log(this.etudiant);
    })
  }

  onNewEtudiant(){
    this.mode=1;
  }

  getCours(){
    this.courService.findAll().subscribe(data=>{
      this.coursList = data;
      console.log(data);
    })
  }

  onChecked( cour : Cours,event :any){
    if (event.target.checked){
    this.coursChecked.push(cour);
    console.log(this.coursChecked);
   }else{
     this.coursChecked = this.coursChecked.filter(m=> m !=cour);
     console.log(this.coursChecked);
   }
  }

  onCheckedEns( ens : Enseignant,event :any){
    if (event.target.checked){
    this.ensChecked.push(ens);
    this.coursChecked.push(ens.cours);
    console.log(this.ensChecked);
    console.log(this.coursChecked);
   }else{
     this.ensChecked = this.ensChecked.filter(m=> m !=ens);
     this.coursChecked = this.coursChecked.filter(x => x !=ens.cours);
     console.log(this.ensChecked);
     console.log(this.coursChecked);
   }
  }

}
