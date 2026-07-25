package com.cognizant.ormlearnex5;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.ormlearnex5.model.Country;
import com.cognizant.ormlearnex5.service.CountryService;

@SpringBootApplication
public class OrmLearnEx5Application implements CommandLineRunner {

    @Autowired
    private CountryService service;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnEx5Application.class, args);
    }

    @Override
    public void run(String... args) {

        Country country = new Country("AU", "Australia");

        service.addCountry(country);

        System.out.println("Country Added Successfully!");
    }
}