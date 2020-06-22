package org.sesame.DAO;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.*;

//@JsonTypeInfo(use = JsonTypeInfo.Id.CLASS, include = JsonTypeInfo.As.WRAPPER_OBJECT)
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "matricule")
@Entity
public class Enseignant implements Serializable{

	static final long serialVersionUID = 3333;


	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long matricule;
	private String nomENS;
	private String prenomENS;
	private String adresseENS;
	private String diplome;

	@ManyToOne()
	//@JsonBackReference(value="ens-dep")
	@JoinColumn(name="codeDEP")
	private Departement departement;
	

	@ManyToOne(cascade = {CascadeType.MERGE,CascadeType.REMOVE,CascadeType.REFRESH})
	@JoinColumn(name="codeC")
	private Cours cours;

	
	@ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.MERGE})
	@JoinTable(name="ENS_ETU",
			joinColumns= @JoinColumn(name="matricule",referencedColumnName = "matricule"),
            inverseJoinColumns = @JoinColumn(name="numInscription", referencedColumnName = "numInscription"))
	private Collection <Etudiant> etudiants;

	public Enseignant() {
		super();
	}

	public Enseignant(Long matricule, String nomENS, String prenomENS, String adresseENS, String diplome, Departement departement, Collection<Etudiant> etudiants,Cours cours ) {
		//super();
		this.matricule = matricule;
		this.nomENS = nomENS;
		this.prenomENS = prenomENS;
		this.adresseENS = adresseENS;
		this.diplome = diplome;
		this.departement = departement;
		this.etudiants = etudiants;
		this.cours = cours;
	}



	public Long getMatricule() {
		return matricule;
	}

	public void setMatricule(Long matricule) {
		this.matricule = matricule;
	}

	public String getNomENS() {
		return nomENS;
	}

	public void setNomENS(String nomENS) {
		this.nomENS = nomENS;
	}

	public String getPrenomENS() {
		return prenomENS;
	}

	public void setPrenomENS(String prenomENS) {
		this.prenomENS = prenomENS;
	}

	public String getAdresseENS() {
		return adresseENS;
	}

	public void setAdresseENS(String adresseENS) {
		this.adresseENS = adresseENS;
	}

	public String getDiplome() {
		return diplome;
	}

	public void setDiplome(String diplome) {
		this.diplome = diplome;
	}

	public Departement getDepartement() {
		return departement;
	}

	public void setDepartement(Departement departement) {
		this.departement = departement;
	}

	public Cours getCours() {
		return cours;
	}

	public void setCours(Cours cours) {
		this.cours = cours;
	}

	@JsonIgnore
	public Collection<Etudiant> getEtudiants() {
		return this.etudiants;
	}

	public void setEtudiants(Collection<Etudiant> etudiants) {
		this.etudiants = etudiants;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}