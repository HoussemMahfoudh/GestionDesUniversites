import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/models/departement';
import { DepartementService } from 'src/app/services/departement.service';
import { Universite } from 'src/app/models/universite';
import { UniversiteServiceService } from 'src/app/services/universite-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lister-departement',
  templateUrl: './lister-departement.component.html',
  styleUrls: ['./lister-departement.component.css']
})
export class ListerDepartementComponent implements OnInit {

  departements:Departement[];
  departementsAll:Departement[];
  universites:Universite[];
  id:boolean = false;
  universite:Universite;
  

  constructor(private depService:DepartementService, 
    private univService:UniversiteServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.getUniversites();
    this.getDepartements();
  }

  getUniversites(){
    this.univService.findAll().subscribe(data=>{
      this.universites=data;
    })
  }


  public getDepartements(){
    this.depService.findAll().subscribe(data=>{
      this.universites;
      this.departements=data;
      this.departementsAll = data;
      console.log(data);
    },err=>{ console.log(err);})
  }

  
  public isNumber(i:any){
    if(i>=0){
      return true;
    }else{
      return false;
    }
  }

  public isEqual(a:any,b:any){
    if(a===b){
      return true;
    }else{
      return false;
    }
  }

  public deleteDepartement(id:number){
    let conf= confirm("etes vous sur de la supprimer ?");
    if(conf){
      this.depService.delete(id).subscribe(data=>{
        this.getDepartements();
      },err=>{console.log(err);})
    }
  }

  onEditDepartement(id:number){
    this.router.navigateByUrl("/departement/modifier/"+id);
  }

  onChangeFilter(univ: Universite){
    console.log(univ);
    this.universite = univ;
    this.departements = this.departementsAll;
    this.departements = [];
    this.departements=this.departementsAll.filter(d=>(d.universite.codeUNV === univ.codeUNV))
    //this.uni = this.universites.filter(u=>(u.departements.filter(d=>(d.codeDEP === dep.codeDEP), console.log("Departement=",u.departements))))
    console.log(this.universites)
  }

}
