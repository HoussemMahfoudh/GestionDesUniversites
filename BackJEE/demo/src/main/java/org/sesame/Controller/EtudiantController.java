package org.sesame.Controller;

import java.util.Collection;
import org.sesame.DAO.Cours;
import org.sesame.DAO.Enseignant;
import org.sesame.DAO.Etudiant;
import org.sesame.InterfaceMetier.CoursInterface;
import org.sesame.InterfaceMetier.EnseignantInterface;
import org.sesame.InterfaceMetier.EtudiantInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/etudiant")
public class EtudiantController {

    @Autowired
    private EtudiantInterface IE;

    @Autowired
    private EnseignantInterface IEns;

    @Autowired
    private CoursInterface IC;

    @PostMapping("/add")
    public Etudiant ajoutEtudiant(@RequestBody Etudiant etudiant){
        System.out.println("***etudiant1***"+etudiant.getNomETU()+"******");
        if (etudiant != null){
            if (etudiant.getEnseignants() != null){
                for(Enseignant e: etudiant.getEnseignants()){
                    Enseignant ee = IEns.getId(e.getMatricule());
                    ee.getEtudiants().add(etudiant);
                    System.out.println("***etudiant***"+ee.getNomENS()+"******");
                    System.out.println(ee.getNomENS());
                }
                for(Cours c: etudiant.getCours()){
                    Cours cc = IC.getId(c.getCodeC());
                    cc.getEtudiants().add(etudiant);
                    //IC.Update(cc.getCodeC(), cc);
                    System.out.println("******"+cc.getLibelleC()+"******");
                }
                return IE.Add(etudiant);
            }else {
                System.out.println("etudiant nul !!!!!!!!!!!!");
            }
        }
        return  null;
    }

    @GetMapping("/get")
    public Collection<Etudiant> getEtudiants(){
        return IE.getAll();
    }

    @DeleteMapping("delete/{id}")
    public void deleteEtudiant(@PathVariable Long id){
        IE.Delete(id);
    }

    @GetMapping("/get/{id}")
    public Etudiant getOne(@PathVariable Long id){
        return IE.getId(id);
    }

    @PutMapping("/update/{id}")
    public Etudiant updateEtudiant(@PathVariable Long id, @RequestBody Etudiant etu){
        if(id!=null && etu !=null){
            return IE.Update(id, etu);
        }else{
            return null;
        }
    }

    @GetMapping("/getEnseignant/{id}")
    public Collection<Enseignant> getEnseignantByEtudiant(@PathVariable Long id){
        return IEns.getAllByEtudiants(id);
    }
}
