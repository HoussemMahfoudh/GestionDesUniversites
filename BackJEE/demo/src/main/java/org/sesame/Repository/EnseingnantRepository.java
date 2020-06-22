package org.sesame.Repository;

import java.util.List;

import org.sesame.DAO.Enseignant;
import org.sesame.DAO.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnseingnantRepository extends JpaRepository<Enseignant,Long> {
    //List<Enseignant> findAllByEtudiantsBy_NumInscription(Long id);
    List<Enseignant> findAllByEtudiants(Etudiant e);
}
