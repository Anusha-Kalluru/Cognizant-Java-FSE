package com.cognizant.ormlearnex4.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.ormlearnex4.model.Country;

public interface CountryRepository extends JpaRepository<Country,String>{

}