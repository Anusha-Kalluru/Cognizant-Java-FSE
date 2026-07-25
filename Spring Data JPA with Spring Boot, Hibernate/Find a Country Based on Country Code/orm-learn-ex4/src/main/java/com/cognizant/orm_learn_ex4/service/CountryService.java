package com.cognizant.ormlearnex4.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.ormlearnex4.model.Country;
import com.cognizant.ormlearnex4.repository.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private CountryRepository repository;

    public Country findCountry(String code){

        return repository.findById(code).orElse(null);

    }

}