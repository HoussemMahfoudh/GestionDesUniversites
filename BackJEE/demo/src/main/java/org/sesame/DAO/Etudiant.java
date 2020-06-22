package org.sesame.DAO;

import java.io.Serializable;
import java.sql.Date;
import java.util.Collection;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


//@JsonTypeInfo(use = JsonTypeInfo.Id.CLASS, include = JsonTypeInfo.As.WRAPPER_OBJECT)
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "numInscription", scope = Etudiant.class)
@Entity
@Table(name="Etudiants")
public class Etudiant implements Serializable{

	static final long serialVersionUID = 4444;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long numInscription;
	private String nomETU;
	private String prenomETU;
	private String adresseETU;
	private Date dateEntree;
	

	//@JsonProperty("Enseignant")
	//@JsonFormat(with = JsonFormat.Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
	//@JsonBackReference(value="ens-etud")
	@ManyToMany(mappedBy="etudiants", cascade = {CascadeType.MERGE})
	private Collection <Enseignant> enseignants ;

	@ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.MERGE})
	@JoinTable(name="ETU_Cours",
			joinColumns = @JoinColumn(name="numInscription",referencedColumnName = "numInscription"),
			inverseJoinColumns = @JoinColumn(name="codeC", referencedColumnName = "codeC"))
	private Collection <Cours> cours;

	public Etudiant() {
		super();
	}


	public Etudiant(Long numInscription, String nomETU, String prenomETU, String adresseETU, Date dateEntree,Collection<Enseignant> enseignants,
			 Collection<Cours> cours) {
		super();
		this.numInscription = numInscription;
		this.nomETU = nomETU;
		this.prenomETU = prenomETU;
		this.adresseETU = adresseETU;
		this.dateEntree = dateEntree;
		this.enseignants= enseignants;
		this.cours = cours;
	}



	public Long getNumInscription() {
		return numInscription;
	}

	public void setNumInscription(Long numInscription) {
		this.numInscription = numInscription;
	}

	public String getNomETU() {
		return nomETU;
	}

	public void setNomETU(String nomETU) {
		this.nomETU = nomETU;
	}

	public String getPrenomETU() {
		return prenomETU;
	}

	public void setPrenomETU(String prenomETU) {
		this.prenomETU = prenomETU;
	}

	public String getAdresseETU() {
		return adresseETU;
	}

	public void setAdresseETU(String adresseETU) {
		this.adresseETU = adresseETU;
	}

	public Date getDateEntree() {
		return dateEntree;
	}

	public void setDateEntree(Date dateEntree) {
		this.dateEntree = dateEntree;
	}

	public Collection<Enseignant> getEnseignants() {
		return this.enseignants;
	}

	public void setEnseignants(Collection<Enseignant> enseignants) {
		this.enseignants = enseignants;
	}

	public Collection<Cours> getCours() {
		return cours;
	}

	public void setCours(Collection<Cours> cours) {
		this.cours = cours;
	}
}
