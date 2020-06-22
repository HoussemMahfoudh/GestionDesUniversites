package org.sesame.Controller;

import org.sesame.DAO.Universites;
import org.sesame.InterfaceMetier.UniversiteInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;


import java.util.Collection;


@RestController
@RequestMapping("/universite")
@CrossOrigin(origins = "http://localhost:4200")
public class UniversiteController {

    @Autowired
    private UniversiteInterface IF;

    @PostMapping("/add")
    public Universites ajoutUniversite(@RequestBody Universites universites){
        if (universites != null){
            return IF.Add(universites);
        }
        return  null;
    }
    /* Blocage d’une requête multiorigines (Cross-Origin Request) : la politique « Same Origin » ne permet pas de consulter la ressource distante située sur http://127.0.0.1:8080/unversite/get. Raison : l’en-tête CORS « Access-Control-Allow-Origin » est manquant. */

    @CrossOrigin(origins="*")
    @GetMapping("/get")
    Collection<Universites> getAll(){
        return IF.getAll();
    }

    @RequestMapping(path = "/get/{id}", method = RequestMethod.GET)
    public Universites getUnivById(@PathVariable Long id){
        return IF.getId(id);
    }

    @PutMapping("/update/{id}")
    public Universites updateUniversite(@PathVariable Long id, @RequestBody Universites universites){
        if(id!=null && universites!=null){
            return (IF.Update(id,universites));
        }else{
            return null;
        }
    }

    @PutMapping("/modifier")
    public Universites modifUniversite(@RequestBody Universites universite){
        if (universite != null) {
            return IF.modifier(universite);
        }
        return null;
    }

    @GetMapping("/getnom/{nom}")
    public Collection<Universites> getAllByNom(@PathVariable String nom){
        if(nom != null){
            return IF.getUniversiteByNom(nom);
        }else{
            return null;
        }
    }

    @GetMapping("/containing/{str}")
    public Collection<Universites> getUniversiteContaining(@PathVariable String str){
        if(str!=null){
            return IF.getUniversiteContaining(str);
        }else {
            return null;
        }
    }

    @CrossOrigin(origins="*")
    @DeleteMapping("/delete/{id}")
    public void deleteUniversite(@PathVariable Long id){
        IF.Delete(id);
    }

}
