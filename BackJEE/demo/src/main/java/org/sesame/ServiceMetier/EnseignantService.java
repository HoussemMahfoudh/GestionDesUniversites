package org.sesame.ServiceMetier;

import org.sesame.DAO.Enseignant;
import org.sesame.DAO.Etudiant;
import org.sesame.InterfaceMetier.EnseignantInterface;
import org.sesame.Repository.EnseingnantRepository;
import org.sesame.Repository.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;



@Service
public class EnseignantService implements EnseignantInterface {
    @Autowired
    private EnseingnantRepository ER;

    @Autowired
    private EtudiantRepository EtuR;

    @Override
    public Collection<Enseignant> getAll() {
        return ER.findAll();
    }

    @Override
    public Enseignant getId(Long id) {
        return ER.getOne(id);
    }

    @Override
    public void Delete(Long id) {
        ER.deleteById(id);
    }

    @Override
    public Enseignant Add(Enseignant e) {
        return ER.save(e);
    }

    @Override
    public Enseignant Update(Long id, Enseignant ens){
        Enseignant updated = ER.getOne(id);
        updated.setNomENS(ens.getNomENS());
        updated.setPrenomENS(ens.getPrenomENS());
        updated.setDiplome(ens.getDiplome());
        updated.setAdresseENS(ens.getAdresseENS());
        updated.setCours(ens.getCours());
        updated.setDepartement(ens.getDepartement());
        updated.setEtudiants(ens.getEtudiants());
        return ER.save(updated);
    }

    @Override
    public Collection<Enseignant>getAllByEtudiants(Long id){
        Etudiant e = EtuR.getOne(id);
        return ER.findAllByEtudiants(e);
    }

}
