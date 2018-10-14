package org.maranan.mentorangel.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import org.maranan.mentorangel.models.Activity;

public interface ActivityRepository extends JpaRepository<Activity, Long> {

}
