package org.maranan.mentorangel.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import org.maranan.mentorangel.models.Person;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.maranan.mentorangel.repositories.PersonRepository;

@CrossOrigin
@RestController
@RequestMapping("/Person")
public class PersonController {

    @Autowired
    private PersonRepository personRepository;

    @GetMapping
    public List<Person> list() {
        return personRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Person person) {
        System.out.println(person.getFullName());
        personRepository.save(person);
    }

    @GetMapping("/{id}")
    public Person get(@PathVariable("id") long id) {
        return personRepository.getOne(id);
    }

    @GetMapping("/userName/{userName}")
    public Person get(@PathVariable("userName") String userName) {
        return personRepository.findByUserName(userName);
    }

}
