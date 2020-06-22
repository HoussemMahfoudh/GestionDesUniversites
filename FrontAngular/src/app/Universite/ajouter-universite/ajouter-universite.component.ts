import { Component, OnInit } from '@angular/core';
import { UniversiteServiceService } from 'src/app/services/universite-service.service';
import { Universite } from 'src/app/models/universite';

@Component({
  selector: 'app-ajouter-universite',
  templateUrl: './ajouter-universite.component.html',
  styleUrls: ['./ajouter-universite.component.css']
})
export class AjouterUniversiteComponent implements OnInit {

  universite:Universite;
  public mode:number=1;

  constructor(private univService:UniversiteServiceService) { }

  ngOnInit(): void {
  }
  public addUniversite(universite:Universite){
    this.univService.save(universite).subscribe(data=>{
      this.universite=data;
      this.mode=2;
      err=>(console.log(err))
    })
  }

  onNewUniversite(){
    this.mode=1;
  }

}
