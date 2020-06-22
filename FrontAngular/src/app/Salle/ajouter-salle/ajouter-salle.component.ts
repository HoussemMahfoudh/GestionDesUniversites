import { Component, OnInit } from '@angular/core';
import { SalleService } from 'src/app/services/salle.service';
import { Salle } from 'src/app/models/salle';
import { Cours } from 'src/app/models/cours';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-ajouter-salle',
  templateUrl: './ajouter-salle.component.html',
  styleUrls: ['./ajouter-salle.component.css']
})
export class AjouterSalleComponent implements OnInit {

  mode:number = 1;
  salle:Salle;

  constructor(private salleService:SalleService, private courService:CoursService) { }

  ngOnInit(): void {
  }

  public addSalle(s:Salle){
    this.salleService.save(s).subscribe(data=>{
      console.log(data);
      this.salle = data;
      this.mode=2;
    },err=>(console.log(err)))
  }

  onNewSalle(){
    this.mode = 2;
  }

}
