package org.sesame.InterfaceMetier;

import org.sesame.DAO.Salle;

import java.util.Collection;

public interface SalleInterface {

    public Collection<Salle> getAll();
    public Salle getId(Long id);
    public void Delete(Long id);
    public Salle Add(Salle c);
    public Salle Update(Long id, Salle s);
}
