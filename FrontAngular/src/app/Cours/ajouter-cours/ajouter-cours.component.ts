import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';
import { Cours } from 'src/app/models/cours';
import { SalleService } from 'src/app/services/salle.service';
import { Salle } from 'src/app/models/salle';

@Component({
  selector: 'app-ajouter-cours',
  templateUrl: './ajouter-cours.component.html',
  styleUrls: ['./ajouter-cours.component.css']
})
export class AjouterCoursComponent implements OnInit {

  cours:Cours;
  mode:number = 1;
  sallesList:Salle[] = [];
  salleChecked:Salle[] = [];

  constructor(private courService:CoursService,private salleService:SalleService) { }

  ngOnInit(): void {
    this.getSalle();
  }

  public addCours(c:Cours){
    c.salles = this.salleChecked;
    console.log(c);
    this.courService.save(c).subscribe(data=>{
      this.cours = data;
      this.mode = 2;

    },err=>(console.log(err)));
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

  onNewCours(){
    this.mode=1;
  }

}
