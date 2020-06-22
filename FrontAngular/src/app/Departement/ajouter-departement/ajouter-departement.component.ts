import { Component, OnInit } from '@angular/core';
import { DepartementService } from 'src/app/services/departement.service';
import { Departement } from 'src/app/models/departement';
import { Universite } from 'src/app/models/universite';
import { UniversiteServiceService } from 'src/app/services/universite-service.service';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-ajouter-departement',
  templateUrl: './ajouter-departement.component.html',
  styleUrls: ['./ajouter-departement.component.css']
})
export class AjouterDepartementComponent implements OnInit {

  departement:Departement;
  mode:number=1;
  universites:Universite[];
  universite:Universite;


  constructor(private depService:DepartementService, private univService:UniversiteServiceService) { }

  ngOnInit(): void {
    this.getUniversite();
  }

  public getUniversite(){
    this.univService.findAll().subscribe(data=>{
      this.universites=data;
    })
  }

  onChange(univ: Universite){
    console.log(univ);
    this.universite = univ;
    }
    
  public addDepartement(dep:Departement){
    this.departement = new Departement(dep.codeDEP,dep.nomDEP,dep.universite);
    console.log(this.departement);
    this.depService.save(this.departement).subscribe(data=>{
      this.departement=dep;
      this.mode=2;
      console.log(this.universite);
    },err=>{console.log(err);})
  }

  onNewDepartement(){
    this.mode=1;
  }

}
