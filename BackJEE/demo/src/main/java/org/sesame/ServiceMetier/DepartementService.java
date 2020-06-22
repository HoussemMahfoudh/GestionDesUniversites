package org.sesame.ServiceMetier;

import org.sesame.DAO.Departement;
import org.sesame.InterfaceMetier.DepartementInterface;
import org.sesame.Repository.DepartementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class DepartementService implements DepartementInterface {

    @Autowired
    private DepartementRepository DR;

    @Override
    public Collection<Departement> getAll() {
        return DR.findAll();
    }

    @Override
    public Departement getId(Long id) {
        return DR.getOne(id);
    }

    @Override
    public void Delete(Long id) {
        DR.deleteById(id);
    }

    @Override
    public Departement Add(Departement d) {
        return DR.save(d);
    }

    public Departement Update(Long id, Departement dep){
        Departement updated = DR.getOne(id);
        updated.setNomDEP(dep.getNomDEP());
        updated.setUniversite(dep.getUniversite());
        updated.setEnseignants(dep.getEnseignants());
        return DR.save(updated);
    }
}
