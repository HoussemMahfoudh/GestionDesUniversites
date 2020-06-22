import { Component, OnInit } from '@angular/core';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Enseignant } from 'src/app/models/enseignant';
import { DepartementService } from 'src/app/services/departement.service';
import { Departement } from 'src/app/models/departement';
import { Cours } from 'src/app/models/cours';
import { CoursService } from 'src/app/services/cours.service';


@Component({
  selector: 'app-modifier-enseignant',
  templateUrl: './modifier-enseignant.component.html',
  styleUrls: ['./modifier-enseignant.component.css']
})
export class ModifierEnseignantComponent implements OnInit {

  id: number;
  enseignant:Enseignant;
  departements:Departement[];
  departement:Departement;
  mode:number = 0;
  cours:Cours;
  coursList:Cours[];

  constructor(private courService:CoursService, private ensService:EnseignantService, private router:Router, private activatedRoute:ActivatedRoute, private depService:DepartementService) { }

  ngOnInit(): void {
    //this.getDepartements();
    this.getOneEnseignant();
    this.getCours();
    this.getDepartements();
    //setTimeout(() => {  this.getOneDepartement(); }, 1000);
    
  }

  public getOneEnseignant(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.ensService.findOne(this.id).subscribe(data=>{
      console.log(data);
      this.enseignant = data;
    },err=>(console.log(err)))
  }

  public getDepartements(){
    this.depService.findAll().subscribe(data=>{
      this.departements=data;
    },err=>(console.log(err)))
  }

  public getOneDepartement(){
    this.ensService.getEnseignantDepartement(this.enseignant.matricule).subscribe(data=>{
      this.departement = data;
      console.log(this.departement);
      this.mode=2;
    },err=>(console.log(err)))
  }

  onChange(dep: Departement){
    console.log(dep);
    this.enseignant.departement= dep;
  }

  updateEnseignant(value:any){
    let ens :Enseignant;
    ens = new Enseignant(value.matricule,value.nomENS,value.prenomENS,value.adresseENS,value.diplome,this.enseignant.departement,this.enseignant.cours)
    this.ensService.update(this.id,ens).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl("/enseignant/lister");
    })
  }

  onChangeCours(cour:Cours){
    this.cours=cour;
    this.enseignant.cours=this.cours;
  }

  getCours(){
    this.courService.findAll().subscribe(data=>{
      this.coursList = data;
      console.log(data);
    },err=>(console.log(err)))
  }
}
