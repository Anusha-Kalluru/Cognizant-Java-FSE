package com.cognizant.orm_learn_ex1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.orm_learn_ex1.model.Country;

public interface CountryRepository extends JpaRepository<Country, String> {

}