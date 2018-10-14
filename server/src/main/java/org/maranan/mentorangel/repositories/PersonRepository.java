package org.maranan.mentorangel.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import org.maranan.mentorangel.models.Person;

public interface PersonRepository extends JpaRepository<Person, Long> {
    
    Person findByUserName (String userName);

}
