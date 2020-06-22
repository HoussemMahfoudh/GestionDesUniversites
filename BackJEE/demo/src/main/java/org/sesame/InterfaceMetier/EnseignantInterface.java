package org.sesame.InterfaceMetier;

import org.sesame.DAO.Enseignant;
import java.util.Collection;

public interface EnseignantInterface {

    public Collection<Enseignant>getAll();
    public Enseignant getId(Long id);
    public void Delete(Long id);
    public Enseignant Add(Enseignant e);
    public Enseignant Update(Long id, Enseignant ens);
    public Collection<Enseignant>getAllByEtudiants(Long id);

}
