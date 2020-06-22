import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cours } from 'src/app/models/cours';
import { SalleService } from 'src/app/services/salle.service';
import { Salle } from 'src/app/models/salle';

@Component({
  selector: 'app-modifier-cours',
  templateUrl: './modifier-cours.component.html',
  styleUrls: ['./modifier-cours.component.css']
})
export class ModifierCoursComponent implements OnInit {

  public id:number;
  public cours:Cours;
  public sallesList:Salle[];
  public salleChecked:Salle[] = [];

  constructor(private courService:CoursService, private router:Router, private activatedRoute:ActivatedRoute, private salleService:SalleService) { }

  ngOnInit(): void {
    this.getCours();
    this.getSalle();
  }

  getCours(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.courService.findOne(this.id).subscribe(data=>{
      console.log(data);
      this.cours = data;
    },err=>(console.log(err)));
  }

  updateCours(value:any){
    let cour:Cours;
    cour = new Cours(this.id, value.libelleC, null);
    this.courService.update(this.id, cour).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl("/cours/lister");
    },err=>(console.log(err)))
  }

  public getSalle(){
    this.salleService.findAll().subscribe(data=>{
      this.sallesList = data;
      console.log(this.cours)
    })
  }

  onCheckedSalle( s:Salle,event :any){
    if (event.target.checked){
    this.salleChecked.push(s);
    console.log(this.salleChecked);
   }else{
     this.salleChecked = this.salleChecked.filter(m=> m !=s);
     console.log(this.salleChecked);
   }
  }

}
