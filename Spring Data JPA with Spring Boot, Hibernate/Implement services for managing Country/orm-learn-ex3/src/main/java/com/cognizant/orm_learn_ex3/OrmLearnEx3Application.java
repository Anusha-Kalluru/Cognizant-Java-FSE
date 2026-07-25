package com.cognizant.orm_learn_ex3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.orm_learn_ex3.service.CountryService;

@SpringBootApplication
public class OrmLearnEx3Application implements CommandLineRunner {

    @Autowired
    private CountryService countryService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnEx3Application.class, args);
    }

    @Override
    public void run(String... args) {

        System.out.println("========== Country List ==========");

        countryService.getAllCountries().forEach(country -> {
            System.out.println(country);
        });

    }
}