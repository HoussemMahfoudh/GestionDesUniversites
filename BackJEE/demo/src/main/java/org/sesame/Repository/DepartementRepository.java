package org.sesame.Repository;

import org.sesame.DAO.Departement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DepartementRepository extends JpaRepository<Departement,Long> {

    List<Departement> findByUniversite(Long id);
    Departement findByCodeDEP(Long codeDEP);
    List<Departement> findAll();
}
