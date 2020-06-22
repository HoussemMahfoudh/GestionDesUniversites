import { Component, OnInit } from '@angular/core';
import { DepartementService } from 'src/app/services/departement.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Departement } from 'src/app/models/departement';
import { UniversiteServiceService } from 'src/app/services/universite-service.service';
import { Universite } from 'src/app/models/universite';

@Component({
  selector: 'app-modifier-departement',
  templateUrl: './modifier-departement.component.html',
  styleUrls: ['./modifier-departement.component.css']
})
export class ModifierDepartementComponent implements OnInit {

  public departement:Departement;
  public universites:Universite[];
  public universite:Universite;
  public id:number;

  constructor(private depService:DepartementService, private univService:UniversiteServiceService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getUniversite();
    this.getDepartement();
    
  }

  public getUniversite(){
    this.univService.findAll().subscribe(data=>{
      this.universites=data;
      console.log(this.universites);
    })
  }

  onChange(univ: Universite){
    console.log(univ);
    this.universite = univ;
    }

  getDepartement(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.depService.findOne(this.id).subscribe(data=>{
      console.log(data);
      this.departement = data;
    },err=>(console.log(err)));
  }

  updateDepartement(value:any){
    let dep:Departement;
    dep = new Departement(this.id, value.nomDEP, this.universite);
    this.depService.update(this.id, dep).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl("/departement/lister");
    },err=>(console.log(err)))
  }

}
