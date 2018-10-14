package org.maranan.mentorangel.controllers;

import java.util.ArrayList;
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

import org.maranan.mentorangel.models.Activity;
import org.maranan.mentorangel.models.Person;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.maranan.mentorangel.repositories.ActivityRepository;
import org.maranan.mentorangel.repositories.PersonRepository;

@CrossOrigin
@RestController
@RequestMapping("/Activity")
public class ActivityController {

    @Autowired
    private ActivityRepository activityRepository;

    @Autowired
    private PersonRepository personRepository;

    @GetMapping
    public List<Activity> list() {
        return activityRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Activity activity) {
        System.out.println(activity.getUserNameMentor());
        updatePoints(activity);
        activityRepository.save(activity);
    }

    @GetMapping("/{id}")
    public Activity get(@PathVariable("id") long id) {
        return activityRepository.getOne(id);
    }

    public void updatePoints(Activity activity) {

        Person person = personRepository.findByUserName(activity.getUserNameMentor().trim());
        Integer totalPoints = Integer.sum(person.getTotalPoints(), activity.getPointValue());
        person.setTotalPoints(totalPoints);

        personRepository.save(person);

    }

}
