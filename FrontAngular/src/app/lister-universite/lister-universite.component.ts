import { Component, OnInit } from '@angular/core';
import { Universite } from '../models/universite';
import { UniversiteServiceService } from 'src/app/services/universite-service.service';
import { Router } from '@angular/router';
import { Departement } from '../models/departement';
import { DepartementService } from '../services/departement.service';


@Component({
  selector: 'app-lister-universite',
  templateUrl: './lister-universite.component.html',
  styleUrls: ['./lister-universite.component.css']
})
export class ListerUniversiteComponent implements OnInit {

  universites:Universite[];
  universitesAll:Universite[];
  univ:Universite;
  departements:Departement[];
  departement:Departement;
  uni:Universite[];

  constructor(private univService: UniversiteServiceService, private router:Router, private depService:DepartementService) { }

  ngOnInit(): void {
    this.getUniversites();
    this.getDepartement();
  }
 
  public getUniversites(){
      this.univService.findAll().subscribe((data: any[])=>{
      this.universites = data;
      this.universitesAll = data;
      console.log(data);
    },err=>{ console.log(err);})
  }

  public deleteUniversite(id:number){
    let conf= confirm("etes vous sur de la supprimer ?");
    if(conf){
      this.univService.delete(id).subscribe(data=>{
        this.getUniversites();
      },err=>{ console.log(err);})
    }
  }

  onEditUniversite(id:number){
    this.router.navigateByUrl("/universite/modifier/"+id);
  }

  public getDepartement(){
    this.depService.findAll().subscribe(data=>{
      this.departements = data;
    },err=>(console.log(err)))
  }

  onChange(dep: Departement){
    console.log(dep);
    this.departement = dep;
    this.universites = this.universitesAll;
    this.universites = [];
    this.universitesAll.forEach(u=>{
      u.departements.forEach(d=>{
        if(d.codeDEP === dep.codeDEP){
          this.universites.push(u);
        }
      })
    })
    //this.uni = this.universites.filter(u=>(u.departements.filter(d=>(d.codeDEP === dep.codeDEP), console.log("Departement=",u.departements))))
    console.log(this.universites)
  }

 
}
