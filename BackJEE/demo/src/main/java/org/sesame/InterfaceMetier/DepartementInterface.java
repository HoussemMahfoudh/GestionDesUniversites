package org.sesame.InterfaceMetier;

import org.sesame.DAO.Departement;

import java.util.Collection;

public interface DepartementInterface {

    public Collection<Departement> getAll();
    public Departement getId(Long id);
    public void Delete(Long id);
    public Departement Add(Departement e);
    public Departement Update(Long id, Departement d);

}
