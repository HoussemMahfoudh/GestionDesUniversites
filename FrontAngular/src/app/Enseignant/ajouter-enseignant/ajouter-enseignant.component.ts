import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/models/enseignant';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartementService } from 'src/app/services/departement.service';
import { Departement } from 'src/app/models/departement';
import { CoursService } from 'src/app/services/cours.service';
import { Cours } from 'src/app/models/cours';

@Component({
  selector: 'app-ajouter-enseignant',
  templateUrl: './ajouter-enseignant.component.html',
  styleUrls: ['./ajouter-enseignant.component.css']
})
export class AjouterEnseignantComponent implements OnInit {

  enseignant:Enseignant;
  departements:Departement[];
  departement:Departement;
  coursList:Cours[];
  cours:Cours;
  mode:number=1;


  constructor(private courService:CoursService,private ensService:EnseignantService, private router:Router, private activatedRoute:ActivatedRoute, private depService:DepartementService) { }

  ngOnInit(): void {
    this.getDepartements();
    this.getCours();
  }

  public getDepartements(){
    this.depService.findAll().subscribe(data=>{
      this.departements=data;
    },err=>(console.log(err)))
  }

  onChange(dep:Departement){
    this.departement=dep;
    console.log(dep);
  }

  onChangeCours(cour:Cours){
    this.cours=cour;
    console.log(this.cours);
  }


  public addEnseignant(ens:Enseignant){
    ens.departement=this.departement;
    this.enseignant = ens;
    this.ensService.save(this.enseignant).subscribe(data=>{
      console.log(this.enseignant);
      this.mode=2;
    },err=>{console.log(err);})

  }

  onNewEnseignant(){
    this.mode=1;
  }

  getCours(){
    this.courService.findAll().subscribe(data=>{
      this.coursList = data;
      console.log(data);
    },err=>(console.log(err)))
  }

}
