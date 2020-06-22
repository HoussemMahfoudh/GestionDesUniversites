package org.sesame.Repository;

import org.sesame.DAO.Universites;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UniversiteRepository extends JpaRepository<Universites,Long> {
    List<Universites> findAllByNomUNV (String nom);
    List<Universites> findAllByNomUNVContaining(String c);
}
