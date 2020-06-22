import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/models/enseignant';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { DepartementService } from 'src/app/services/departement.service';
import { Departement } from 'src/app/models/departement';
import { switchMap, debounceTime } from 'rxjs/operators';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { Router } from '@angular/router';
import { CoursService } from 'src/app/services/cours.service';
import { Cours } from 'src/app/models/cours';

@Component({
  selector: 'app-lister-enseignant',
  templateUrl: './lister-enseignant.component.html',
  styleUrls: ['./lister-enseignant.component.css']
})
export class ListerEnseignantComponent implements OnInit {

  public enseignants:Enseignant[];
  public enseignantsAll:Enseignant[];
  public enseignant:Enseignant;
  public departement:Departement;
  public departements:Array<Departement> = [];
  public deps:Departement[];
  public coursAll:Cours[];


  constructor(private ensService:EnseignantService,
    private depSerivce:DepartementService,
    private courService:CoursService,
    private router:Router) { }

  ngOnInit(): void {
    this.getEnseignants();
    this.getAllCours();
  }

  getEnseignants(){
    this.ensService.findAll().subscribe(data=>{
      this.enseignants = data;
      this.enseignantsAll = data;
      console.log(data);
    },err=>(console.log(err)))
    this.depSerivce.findAll().subscribe(data=>{
      this.deps=data;
    })
  }

  getAllCours(){
    this.courService.findAll().subscribe(data=>{
      this.coursAll = data;
    })
  }

  deleteEnseignant(id:number){
    let conf= confirm("etes vous sur de la supprimer ?");
    if(conf){
      this.ensService.delete(id).subscribe(data=>{
        this.getEnseignants();
      },err=>(console.log(err)))
    }
  }
  
  public afficherDepartement(id:number){
    this.ensService.getEnseignantDepartement(id).subscribe(data=>{
      let nom:string
      let id:number;
      id=data.codeDEP;
      nom=data.nomDEP;
      this.departements.push(new Departement(data.codeDEP,data.nomDEP,data.universite));
      console.log(this.departements);
      let conf= confirm(nom+" "+ id);
    })
  }

  onEditEnseignant(id:number){
    this.router.navigateByUrl("/enseignant/modifier/"+id);
  }

  onChangeFilterCours(cour: Cours){
    console.log(cour);
    this.enseignants = this.enseignantsAll;
    this.enseignants = [];
    this.enseignants=this.enseignantsAll.filter(e=>(e.cours.codeC == cour.codeC))
    //this.uni = this.universites.filter(u=>(u.departements.filter(d=>(d.codeDEP === dep.codeDEP), console.log("Departement=",u.departements))))
  }

  onChangeFilterDepartement(dep: Departement){
    console.log(dep);
    this.enseignants = this.enseignantsAll;
    this.enseignants = [];
    this.enseignants=this.enseignantsAll.filter(e=>(e.departement.codeDEP== dep.codeDEP))
    //this.uni = this.universites.filter(u=>(u.departements.filter(d=>(d.codeDEP === dep.codeDEP), console.log("Departement=",u.departements))))
  }
}
