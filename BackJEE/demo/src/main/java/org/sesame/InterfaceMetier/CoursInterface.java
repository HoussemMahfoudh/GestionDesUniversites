package org.sesame.InterfaceMetier;

import org.sesame.DAO.Cours;

import java.util.Collection;

public interface CoursInterface {

    public Collection<Cours> getAll();
    public  Cours getId(Long id);
    public void Delete(Long id);
    public Cours Add(Cours c);
    public Cours Update(Long id, Cours c);
}
