package org.sesame.Controller;

import java.util.Collection;

import org.sesame.DAO.Salle;
import org.sesame.InterfaceMetier.SalleInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/salle")
public class SalleController {

    @Autowired
    private SalleInterface SI;

    @GetMapping("/get")
    public Collection<Salle>getSalle(){
        return SI.getAll();
    }

    @PostMapping("/add")
    public Salle ajouterSalle(@RequestBody Salle salle){
        if(salle != null)
            return SI.Add(salle);
        return null;
    }

    @PutMapping("/update/{id}")
    public Salle updateSalle(@RequestBody Salle salle, @PathVariable Long id){
        if (salle != null && id!=null){
            System.out.println("cxxxxxxxxxxxxxxxx**************");
            return SI.Update(id, salle);
        }
        return null;
    }

    @DeleteMapping("/delete/{id}")
    public void deleteSalle(@PathVariable Long id){
        SI.Delete(id);
    }

    @GetMapping("/get/{id}")
    public Salle getOne(@PathVariable Long id){
        return SI.getId(id);
    }
    
    
}