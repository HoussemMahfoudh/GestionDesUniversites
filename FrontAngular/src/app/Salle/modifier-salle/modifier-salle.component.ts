import { Component, OnInit } from '@angular/core';
import { SalleService } from 'src/app/services/salle.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Salle } from 'src/app/models/salle';

@Component({
  selector: 'app-modifier-salle',
  templateUrl: './modifier-salle.component.html',
  styleUrls: ['./modifier-salle.component.css']
})
export class ModifierSalleComponent implements OnInit {

  salle:Salle;
  id:number;
  mode:number = 1;

  constructor(private salleService:SalleService, private router:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getSalle();
  }

  getSalle(){
    this.id = this.activeRoute.snapshot.params["id"];
    this.salleService.findOne(this.id).subscribe(data=>{
      this.salle = data;
      console.log(this.salle);
    },err=>(console.log(err)))
  }

  updateSalle(value:any){
    let newSalle:Salle = new Salle(this.id,value.nomS,value.capacite);
    console.log(this.salle);
    this.salleService.update(this.id,this.salle).subscribe(data=>{
      this.router.navigateByUrl("/salle/lister");
    },err=>(console.log(err)))
  }



}
