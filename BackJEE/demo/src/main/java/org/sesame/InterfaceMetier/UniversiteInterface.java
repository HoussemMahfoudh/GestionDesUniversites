package org.sesame.InterfaceMetier;

import org.sesame.DAO.Universites;

import java.util.Collection;

public interface UniversiteInterface {
    public Collection<Universites> getAll();
    public Universites getId(Long id);
    public void Delete(Long id);
    public Universites Add(Universites c);
    public Universites Update(Long id, Universites c);
    public Collection<Universites> getUniversiteByNom(String nom);
    public Collection<Universites> getUniversiteContaining(String str);
    public Universites modifier(Universites universite);

}
