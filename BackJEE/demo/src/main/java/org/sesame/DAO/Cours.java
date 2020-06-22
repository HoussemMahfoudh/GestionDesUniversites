package org.sesame.DAO;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "codeC", scope = Cours.class)
@Entity
public class Cours implements Serializable {

    static final long serialVersionUID = 5555;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codeC;
    private  String libelleC;

    @JsonIgnore
    @ManyToMany(mappedBy = "cours", cascade = {CascadeType.MERGE})
    private Collection<Etudiant>Etudiants;

    @JsonIgnore
    @OneToMany(mappedBy = "cours", fetch=FetchType.LAZY, cascade = {CascadeType.MERGE})
    private Collection<Enseignant> Enseignants;

    @ManyToMany(cascade = {CascadeType.REMOVE})
    @JoinTable(name="COURS_SALLE",
            joinColumns = @JoinColumn(name = "codeC",referencedColumnName = "codeC"),
            inverseJoinColumns = @JoinColumn(name = "numS", referencedColumnName = "numS"))
    private Collection<Salle>salles;

    public Cours() {
        super();
    }


	public Long getCodeC() {
        return codeC;
    }

    public void setCodeC(Long codeC) {
        this.codeC = codeC;
    }

    public String getLibelleC() {
        return libelleC;
    }

    public void setLibelleC(String libelleC) {
        this.libelleC = libelleC;
    }

    @JsonIgnore
    public Collection<Etudiant> getEtudiants() {
        return Etudiants;
    }

    public void setEtudiants(Collection<Etudiant> etudiants) {
        Etudiants = etudiants;
    }

    @JsonIgnore
    public Collection<Enseignant>getEnseignants(){
        return this.Enseignants;
    }


    public void setEnseignants(Collection<Enseignant> enseignants){
        this.Enseignants=enseignants;
    }

    public Collection<Salle> getSalles() {
        return salles;
    }

    public void setSalles(Collection<Salle> salles) {
        this.salles = salles;
    }

    public Cours(Long codeC, String libelleC, Collection<Etudiant> etudiants, Collection<Enseignant> enseignants,
            Collection<Salle> salles) {
            //super();
        this.codeC = codeC;
        this.libelleC = libelleC;
        this.Etudiants = etudiants;
        this.Enseignants = enseignants;
        this.salles = salles;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    

    
}
