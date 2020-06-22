import { Component, OnInit } from '@angular/core';
import { UniversiteServiceService } from 'src/app/services/universite-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Universite } from 'src/app/models/universite';

@Component({
  selector: 'app-modifier-universite',
  templateUrl: './modifier-universite.component.html',
  styleUrls: ['./modifier-universite.component.css']
})
export class ModifierUniversiteComponent implements OnInit {
  public universite:Universite;
  public id:number;

  constructor(private univService:UniversiteServiceService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getUniversite();
  }

  getUniversite(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.univService.findOne(this.id).subscribe(data=>{
      console.log(data);
      this.universite=data;
    },err=>(console.log(err)));
  }

  updateUniversite(value:any){
    let univ:Universite;
    univ = new Universite(this.id,value.nom,value.Adresse);
    this.univService.update(this.id,univ).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl("/universite/lister");
    }),err=>(console.log(err));
  }

}
