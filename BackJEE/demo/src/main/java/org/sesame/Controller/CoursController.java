package org.sesame.Controller;

import java.util.Collection;

import org.sesame.DAO.Cours;
import org.sesame.DAO.Salle;
import org.sesame.InterfaceMetier.CoursInterface;
import org.sesame.InterfaceMetier.SalleInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cours")
@CrossOrigin(origins = "*")
public class CoursController {
    @Autowired
    private CoursInterface CI;

    @Autowired
    private SalleInterface SI;

    @GetMapping("/get")
    @CrossOrigin(origins="*")
    public Collection<Cours>getAll(){
        return CI.getAll();
    }

    @PostMapping("/add")
    public Cours ajouterCours(@RequestBody Cours cours){
        if (cours != null){
            if (cours.getSalles() != null){
                for(Salle s: cours.getSalles()){
                    Salle ss = SI.getId(s.getNumS());
                    ss.getCours().add(cours);
                    System.out.println(ss.getNomS());
                }
                return CI.Add(cours);
        }else {
            System.out.println("nul !!!!!!!!!!!!");
        }
        }
        return  null;
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCours(@PathVariable Long id){
        CI.Delete(id);
    }

    @GetMapping("/get/{id}")
    public Cours getId(@PathVariable Long id){
        return CI.getId(id);
    }

    @PutMapping("/update/{id}")
    public Cours updateCours(@PathVariable Long id, @RequestBody Cours cours){
        if(id!=null && cours !=null){
            return CI.Update(id, cours);
        }else{
            return null;
        }
    }
}