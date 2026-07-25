package com.cognizant.orm_learn_ex3.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.orm_learn_ex3.model.Country;

public interface CountryRepository extends JpaRepository<Country, String> {

}