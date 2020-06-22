package org.sesame.ServiceMetier;

import org.sesame.DAO.Universites;
import org.sesame.InterfaceMetier.UniversiteInterface;
import org.sesame.Repository.UniversiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class UniversiteService implements UniversiteInterface  {
    @Autowired
    private UniversiteRepository UR;

    @Override
    public Collection<Universites> getAll() {
        return UR.findAll();
    }

    @Override
    public Universites getId(Long id) {
        return UR.getOne(id);
    }

    @Override
    public void Delete(Long id) {
        UR.deleteById(id);
    }

    @Override
    public Universites Add(Universites c) {
        return UR.save(c);
    }

    @Override
    public Universites Update(Long id, Universites c){
        Universites updated = UR.getOne(id);
        updated.setNomUNV(c.getNomUNV());
        updated.setAdresseSite(c.getAdresseSite());
        return UR.save(updated);
    }

    @Override
    public Universites modifier(Universites universite) {
        Universites updated = UR.getOne(universite.getCodeUNV());
        updated.setNomUNV(universite.getNomUNV());
        updated.setAdresseSite(universite.getAdresseSite());
        return UR.save(updated);
    }

    public Collection<Universites> getUniversiteByNom(String nom){
        return UR.findAllByNomUNV(nom);
    }

    public Collection<Universites> getUniversiteContaining(String str){
        return UR.findAllByNomUNVContaining(str);
    }

}
