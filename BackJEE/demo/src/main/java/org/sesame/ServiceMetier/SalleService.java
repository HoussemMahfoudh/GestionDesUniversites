package org.sesame.ServiceMetier;

import org.sesame.DAO.Salle;
import org.sesame.InterfaceMetier.SalleInterface;
import org.sesame.Repository.SalleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class SalleService implements SalleInterface {
    @Autowired
    private SalleRepository SL;


    @Override
    public Collection<Salle> getAll() {
        return SL.findAll();
    }

    @Override
    public Salle getId(Long id) {
        return SL.getOne(id);
    }

    @Override
    public void Delete(Long id) {
        SL.deleteById(id);
    }

    @Override
    public Salle Add(Salle c) {
        return SL.save(c);
    }

    @Override
    public Salle Update(Long id, Salle s){
        Salle salle = SL.getOne(id);
        salle.setNomS(s.getNomS());
        salle.setCours(s.getCours());
        salle.setCapacite(s.getCapacite());
        return SL.save(salle);
    }
}
