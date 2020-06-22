package org.sesame.DAO;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.*;
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "codeUNV",scope = Long.class)
@Entity
public class Universites implements Serializable {

	static final long serialVersionUID = 1111;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)

	private Long codeUNV;
	private String nomUNV;
	private String adresseSite;
	

	@OneToMany(mappedBy="universite", fetch=FetchType.LAZY,cascade = CascadeType.MERGE)
	//@JsonManagedReference(value="univ-dep")
	private Collection <Departement> Departements;

	
	
	public Universites(final Long codeUNV, final String nomUNV, final String adresseSite, final Collection<Departement> departements) {
		super();
		this.codeUNV = codeUNV;
		this.nomUNV = nomUNV;
		this.adresseSite = adresseSite;
		Departements = departements;
	}
	public Universites() {
		super();
	}
	public Long getCodeUNV() {
		return codeUNV;
	}
	public void setCodeUNV(final Long codeUNV) {
		this.codeUNV = codeUNV;
	}
	public String getNomUNV() {
		return nomUNV;
	}
	public void setNomUNV(final String nomUNV) {
		this.nomUNV = nomUNV;
	}
	public String getAdresseSite() {
		return adresseSite;
	}
	public void setAdresseSite(final String adresseSite) {
		this.adresseSite = adresseSite;
	}

	public Collection<Departement> getDepartements() {
		return Departements;
	}

	public void setDepartements(final Collection<Departement> departements) {
		this.Departements = departements;
	}
	
	
	

}
