package org.sesame.Controller;

import org.sesame.DAO.Departement;
import org.sesame.InterfaceMetier.DepartementInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;


@RestController
@RequestMapping("/departement")
@CrossOrigin(origins = "*")
public class DepartementController {

    @Autowired
    private DepartementInterface DF;

    @PostMapping("/add")
    public Departement ajouterDepartement(@RequestBody Departement departement){
        if (departement.getUniversite()!=null){
            //System.out.println("++++++"+departement.getUniversite().getNomUNV());
            return DF.Add(departement);
        }else{
            System.out.println("++++++");
        }
        return null;
    }

    @GetMapping("/get/{id}")
    public Departement getId(@PathVariable Long id){
        return DF.getId(id);
    }

    @CrossOrigin(origins="*")
    @GetMapping("/get")
    public Collection<Departement> getAll(){
        return DF.getAll();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteDepartement(@PathVariable Long id){
        DF.Delete(id);
    }

    @PutMapping("/update/{id}")
    public Departement updateDepartement(@PathVariable Long id, @RequestBody Departement dep){
        if(id!=null && dep !=null){
            return DF.Update(id, dep);
        }else{
            return null;
        }
    }
}
