import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListerUniversiteComponent } from 'src/app/lister-universite/lister-universite.component';
import { AjouterUniversiteComponent } from 'src/app/Universite/ajouter-universite/ajouter-universite.component';
import { ListerDepartementComponent } from './Departement/lister-departement/lister-departement.component';
import { AjouterDepartementComponent } from './Departement/ajouter-departement/ajouter-departement.component';
import { ModifierUniversiteComponent } from './Universite/modifier-universite/modifier-universite.component';
import { ModifierDepartementComponent } from './Departement/modifier-departement/modifier-departement.component';
import { AjouterEnseignantComponent } from './Enseignant/ajouter-enseignant/ajouter-enseignant.component';
import { ListerEnseignantComponent } from './Enseignant/lister-enseignant/lister-enseignant.component';
import { ListerEtudiantComponent } from './Etudiant/lister-etudiant/lister-etudiant.component';
import { AjouterEtudiantComponent } from './Etudiant/ajouter-etudiant/ajouter-etudiant.component';
import { ListerCoursComponent } from './Cours/lister-cours/lister-cours.component';
import { AjouterCoursComponent } from './Cours/ajouter-cours/ajouter-cours.component';
import { ModifierCoursComponent } from './Cours/modifier-cours/modifier-cours.component';
import { ModifierEnseignantComponent } from './Enseignant/modifier-enseignant/modifier-enseignant.component';
import { ModifierEtudiantComponent } from './Etudiant/modifier-etudiant/modifier-etudiant.component';
import { ListerSalleComponent } from './Salle/lister-salle/lister-salle.component';
import { AjouterSalleComponent } from './Salle/ajouter-salle/ajouter-salle.component';
import { ModifierSalleComponent } from './Salle/modifier-salle/modifier-salle.component';


const routes: Routes = [
  {
    path:"universite/lister",component:ListerUniversiteComponent
  },
  {
    path:"universite/ajouter",component:AjouterUniversiteComponent
  },
  {
    path:"universite/modifier/:id",component:ModifierUniversiteComponent
  },
  {
    path:"departement/lister",component:ListerDepartementComponent
  },
  {
    path:"departement/ajouter",component:AjouterDepartementComponent
  },
  {
    path:"departement/modifier/:id",component:ModifierDepartementComponent
  },
  {
    path:"enseignant/lister",component:ListerEnseignantComponent
  },
  {
    path:"enseignant/ajouter",component:AjouterEnseignantComponent
  },
  {
    path:"enseignant/modifier/:id",component:ModifierEnseignantComponent
  },
  {
    path:"etudiant/lister",component:ListerEtudiantComponent
  },
  {
    path:"etudiant/ajouter",component:AjouterEtudiantComponent
  },
  {
    path:"etudiant/modifier/:id",component:ModifierEtudiantComponent
  },
  {
    path:"cours/lister",component:ListerCoursComponent
  },
  {
    path:"cours/ajouter",component:AjouterCoursComponent
  },
  {
    path:"cours/modifier/:id",component:ModifierCoursComponent
  },
  {
    path:"salle/lister",component:ListerSalleComponent
  },
  {
    path:"salle/ajouter",component:AjouterSalleComponent
  },
  {
    path:"salle/modifier/:id",component:ModifierSalleComponent
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
