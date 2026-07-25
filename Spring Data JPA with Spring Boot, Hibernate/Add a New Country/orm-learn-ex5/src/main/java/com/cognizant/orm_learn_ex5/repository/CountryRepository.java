package com.cognizant.ormlearnex5.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.ormlearnex5.model.Country;

public interface CountryRepository extends JpaRepository<Country, String> {

}