import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';
import { Cours } from 'src/app/models/cours';
import { Router } from '@angular/router';
import { SalleService } from 'src/app/services/salle.service';
import { Salle } from 'src/app/models/salle';

@Component({
  selector: 'app-lister-cours',
  templateUrl: './lister-cours.component.html',
  styleUrls: ['./lister-cours.component.css']
})
export class ListerCoursComponent implements OnInit {

  public cours:Cours[] = [];
  public salles:Salle[];

  constructor(private courService:CoursService, private router:Router,private salleService:SalleService) { }

  ngOnInit(): void {
    this.getCours();
  }

  public getCours(){
    this.courService.findAll().subscribe(data=>{
      this.cours = data;
      console.log(data);
    },err=>{ console.log(err);})
    this.salleService.findAll().subscribe(data=>{
      this.salles=data;
    })
  }

  public onEditCours(id:number){
    this.router.navigateByUrl("/cours/modifier/"+id);
  }

  public deleteCours(id:number){
    let conf= confirm("etes vous sur de la supprimer ?");
    if(conf){
      this.courService.delete(id).subscribe(data=>{
        this.getCours();
      },err=>{console.log(err);})
    }
  }



}
