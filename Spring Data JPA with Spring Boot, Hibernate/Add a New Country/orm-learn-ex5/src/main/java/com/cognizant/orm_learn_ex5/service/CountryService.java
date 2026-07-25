package com.cognizant.ormlearnex5.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.ormlearnex5.model.Country;
import com.cognizant.ormlearnex5.repository.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private CountryRepository repository;

    public Country addCountry(Country country) {
        return repository.save(country);
    }
}