import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListerUniversiteComponent } from 'src/app/lister-universite/lister-universite.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AjouterUniversiteComponent } from './Universite/ajouter-universite/ajouter-universite.component';
import { ListerDepartementComponent } from './Departement/lister-departement/lister-departement.component';
import { AjouterDepartementComponent } from './Departement/ajouter-departement/ajouter-departement.component';
import { ModifierUniversiteComponent } from './Universite/modifier-universite/modifier-universite.component';
import { ModifierDepartementComponent } from './Departement/modifier-departement/modifier-departement.component';
import { AjouterEnseignantComponent } from './Enseignant/ajouter-enseignant/ajouter-enseignant.component';
import { ListerEnseignantComponent } from './Enseignant/lister-enseignant/lister-enseignant.component';
import { ListerEtudiantComponent } from './Etudiant/lister-etudiant/lister-etudiant.component';
import { AjouterEtudiantComponent } from './Etudiant/ajouter-etudiant/ajouter-etudiant.component';
import { AjouterCoursComponent } from './Cours/ajouter-cours/ajouter-cours.component';
import { ListerCoursComponent } from './Cours/lister-cours/lister-cours.component';
import { ModifierCoursComponent } from './Cours/modifier-cours/modifier-cours.component';
import { ModifierEnseignantComponent } from './Enseignant/modifier-enseignant/modifier-enseignant.component';
import { ModifierEtudiantComponent } from './Etudiant/modifier-etudiant/modifier-etudiant.component';
import { ListerSalleComponent } from './Salle/lister-salle/lister-salle.component';
import { AjouterSalleComponent } from './Salle/ajouter-salle/ajouter-salle.component';
import { ModifierSalleComponent } from './Salle/modifier-salle/modifier-salle.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ListerUniversiteComponent,
    AjouterUniversiteComponent,
    ListerDepartementComponent,
    AjouterDepartementComponent,
    ModifierUniversiteComponent,
    ModifierDepartementComponent,
    AjouterEnseignantComponent,
    ListerEnseignantComponent,
    ListerEtudiantComponent,
    AjouterEtudiantComponent,
    AjouterCoursComponent,
    ListerCoursComponent,
    ModifierCoursComponent,
    ModifierEnseignantComponent,
    ModifierEtudiantComponent,
    ListerSalleComponent,
    AjouterSalleComponent,
    ModifierSalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
