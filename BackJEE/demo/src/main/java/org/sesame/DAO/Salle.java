package org.sesame.DAO;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;
import java.util.Collection;

@Entity
public class Salle implements Serializable {

    static final long serialVersionUID = 5555;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numS;
    private String nomS;
    private Long capacite;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToMany(mappedBy = "salles",cascade = {CascadeType.REMOVE})
    private Collection<Cours> cours;


    public Salle(Long numS, String nomS, Long capacite, Collection<Cours> cours) {
		super();
		this.numS = numS;
		this.nomS = nomS;
		this.capacite = capacite;
		this.cours = (Collection<Cours>) cours;
	}

	public Salle() {
        super();
    }

    public Long getNumS() {
        return numS;
    }

    public void setNumS(Long numS) {
        this.numS = numS;
    }

    public String getNomS() {
        return nomS;
    }

    public void setNomS(String nomS) {
        this.nomS = nomS;
    }

    public Long getCapacite() {
        return capacite;
    }

    public void setCapacite(Long capacite) {
        this.capacite = capacite;
    }

    @JsonIgnore
    public Collection<Cours> getCours() {
        return  this.cours;
    }

    public void setCours(Collection<Cours> cours) {
        this.cours = cours;
    }
}
