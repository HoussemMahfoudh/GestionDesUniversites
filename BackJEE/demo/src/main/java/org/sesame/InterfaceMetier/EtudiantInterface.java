package org.sesame.InterfaceMetier;

import org.sesame.DAO.Etudiant;

import java.util.Collection;

public interface EtudiantInterface {
    public Collection<Etudiant> getAll();
    public Etudiant getId(Long id);
    public void Delete(Long id);
    public Etudiant Add(Etudiant e);
    public Etudiant Update(Long id, Etudiant e);
}
