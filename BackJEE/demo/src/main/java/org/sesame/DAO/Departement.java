package org.sesame.DAO;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Departement implements Serializable {

	static final long serialVersionUID = 2222;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long codeDEP;
	private String nomDEP;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name="codeUNV")
	//@JsonBackReference(value="univ-dep")
	private Universites universite;
	
	@JsonIgnore
	@OneToMany(mappedBy="departement", fetch=FetchType.LAZY, cascade = CascadeType.ALL)
	private Collection <Enseignant> Enseignants;

	public Departement() {
		super();
	}

	public Departement(Long codeDEP, String nomDEP, Universites universite) {
		super();
		this.codeDEP = codeDEP;
		this.nomDEP = nomDEP;
		this.universite = universite;
	}

	public Long getCodeDEP() {
		return codeDEP;
	}


	public void setCodeDEP(Long codeDEP) {
		this.codeDEP = codeDEP;
	}


	public String getNomDEP() {
		return nomDEP;
	}


	public void setNomDEP(String nomDEP) {
		this.nomDEP = nomDEP;
	}

	@JsonBackReference
	public Universites getUniversite() {
		return universite;
	}


	public void setUniversite(Universites universite) {
		this.universite = universite;
	}


	@JsonIgnore
	public Collection<Enseignant> getEnseignants() {
		return Enseignants;
	}


	public void setEnseignants(Collection<Enseignant> enseignants) {
		Enseignants = enseignants;
	}
	

}
