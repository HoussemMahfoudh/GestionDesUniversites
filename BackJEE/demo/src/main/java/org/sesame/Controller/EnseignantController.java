package org.sesame.Controller;

import org.sesame.DAO.Departement;
import org.sesame.DAO.Enseignant;
import org.sesame.InterfaceMetier.EnseignantInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;


@RestController
@RequestMapping("/enseignant")
@CrossOrigin("*")
public class EnseignantController {

    @Autowired
    private EnseignantInterface IEns;

    @GetMapping("/get")
    Collection<Enseignant> getAllEns(){
        return IEns.getAll();
    }

    @GetMapping("/get/{id}")
    public Enseignant getOne(@PathVariable Long id){
        return IEns.getId(id);
    }

    @PostMapping("/add")
    public Enseignant ajoutEnseignant(@RequestBody Enseignant enseignant){
        if (enseignant != null){
            return IEns.Add(enseignant);
        }
        return  null;
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEnseignant(@PathVariable Long id){
        IEns.Delete(id);
    }

    @GetMapping("/get/departement/{id}")
    public Departement getOneDepartement(@PathVariable Long id){
        if(IEns.getId(id).getDepartement()!=null){
            return IEns.getId(id).getDepartement();
        }else{
            return null;
        }
    }

    @PutMapping("/update/{id}")
    public Enseignant updateEnseignant(@PathVariable Long id, @RequestBody Enseignant ens){
        if(id!=null && ens !=null){
            return IEns.Update(id, ens);
        }else{
            return null;
        }
    }

    


}
