import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';
import { Router } from '@angular/router';
import { Cours } from 'src/app/models/cours';
import { Enseignant } from 'src/app/models/enseignant';
import { CoursService } from 'src/app/services/cours.service';
import { Departement } from 'src/app/models/departement';

@Component({
  selector: 'app-lister-etudiant',
  templateUrl: './lister-etudiant.component.html',
  styleUrls: ['./lister-etudiant.component.css']
})
export class ListerEtudiantComponent implements OnInit {

  etudiants:Etudiant[];
  etudiantsAll:Etudiant[];
  coursAll:Cours[];
  enseignants:Enseignant[];

  constructor(private etudService:EtudiantService, private router:Router
    ,private courService:CoursService) { }

  ngOnInit(): void {
    this.getEtudiants();
  }

  public getEtudiants(){
    this.etudService.findAll().subscribe(data=>{
      this.etudiants = data;
      this.etudiantsAll = data;
      console.log(data);
    })
    this.courService.findAll().subscribe(data=>{
      this.coursAll = data;
    })
  }

  public deleteEtudiant(id:number){
    let conf= confirm("etes vous sur de la supprimer ?");
    if(conf){
      this.etudService.delete(id).subscribe(data=>{
        this.getEtudiants();
      },err=>(console.log(err)))
    }
  }

  onEditEtudiant(id:number){
    this.router.navigateByUrl("/etudiant/modifier/"+id);
  }

  onChangeFilterCours(cour: Cours){
    console.log(cour);
    this.etudiants = this.etudiantsAll;
    console.log(this.etudiants)
    this.etudiants = [];
    this.etudiantsAll.forEach(e=>{
      e.cours.forEach(c=>{
        if(c.codeC === cour.codeC){
          this.etudiants.push(e);
        }
      })
    })
    //this.uni = this.universites.filter(u=>(u.departements.filter(d=>(d.codeDEP === dep.codeDEP), console.log("Departement=",u.departements))))
  }

}
