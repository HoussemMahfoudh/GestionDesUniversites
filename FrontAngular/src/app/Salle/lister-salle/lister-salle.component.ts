import { Component, OnInit } from '@angular/core';
import { SalleService } from 'src/app/services/salle.service';
import { Salle } from 'src/app/models/salle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lister-salle',
  templateUrl: './lister-salle.component.html',
  styleUrls: ['./lister-salle.component.css']
})
export class ListerSalleComponent implements OnInit {

  salles:Salle[];
  constructor(private salleService:SalleService, private router:Router) { }

  ngOnInit(): void {
    this.getSalles();
  }

  public getSalles(){
    this.salleService.findAll().subscribe(data=>{
      this.salles = data;
      console.log(data);
    })
  }
  
  onEditSalle(id:number){
    this.router.navigateByUrl("/salle/modifier/"+id);
  }

  deleteSalle(id:number){
    let conf= confirm("etes vous sur de la supprimer ?");
    if(conf){
      this.salleService.delete(id).subscribe(data=>{
        this.getSalles();
      },err=>{ console.log(err);})
    }
  }

}
