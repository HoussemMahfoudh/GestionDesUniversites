package org.sesame.ServiceMetier;

import org.sesame.DAO.Cours;
import org.sesame.InterfaceMetier.CoursInterface;
import org.sesame.Repository.CoursRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class CoursService implements CoursInterface {

    @Autowired
    private CoursRepository CR;

    @Override
    public Collection<Cours> getAll() {
        return CR.findAll();
    }

    @Override
    public Cours getId(Long id) {
        return CR.getOne(id);
    }

    @Override
    public void Delete(Long id) {
        CR.deleteById(id);
    }

    @Override
    public Cours Add(Cours c) {
        return CR.save(c);
    }

    public Cours Update(Long id, Cours cours){
        Cours updated = CR.getOne(id);
        updated.setLibelleC(cours.getLibelleC());
        return CR.save(updated);
    }
}
