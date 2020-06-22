package org.sesame.ServiceMetier;

import org.sesame.DAO.Cours;
import org.sesame.DAO.Enseignant;
import org.sesame.DAO.Etudiant;
import org.sesame.InterfaceMetier.EtudiantInterface;

import org.sesame.Repository.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class EtudiantService implements EtudiantInterface {

    @Autowired
    private EtudiantRepository ER;

    @Override
    public Collection<Etudiant> getAll() {
        return ER.findAll();
    }


    @Override
    public Etudiant getId(Long id) {
        return ER.getOne(id);
    }

    @Override
    public void Delete(Long id) {
        ER.deleteById(id);
    }

    @Override
    public Etudiant Add(Etudiant e) {
        return ER.save(e);
    }

    @Override
    public Etudiant Update(Long id, Etudiant e){
        System.out.println("HELLO");
        Etudiant updated = ER.getOne(id);
        updated.setNomETU(e.getNomETU());
        System.out.println(e.getNomETU());
        updated.setPrenomETU(e.getAdresseETU());
        updated.setAdresseETU(e.getAdresseETU());
        updated.setDateEntree(e.getDateEntree());
        for (Cours c : e.getCours()) {
            System.out.println("Cours nom = "+c.getLibelleC()+"\n");
        }
        updated.setEnseignants(e.getEnseignants());
        for (Enseignant ens : updated.getEnseignants()) {
            System.out.println("ENs nom = "+ens.getNomENS()+"\n");
        }
        updated.setCours(e.getCours());
        
        return ER.save(updated);
    }
}
