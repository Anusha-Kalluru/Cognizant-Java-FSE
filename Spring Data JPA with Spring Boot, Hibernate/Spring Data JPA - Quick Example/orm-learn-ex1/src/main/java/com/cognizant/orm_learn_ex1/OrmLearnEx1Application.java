package com.cognizant.orm_learn_ex1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.orm_learn_ex1.service.CountryService;

@SpringBootApplication
public class OrmLearnEx1Application implements CommandLineRunner {

    @Autowired
    private CountryService countryService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnEx1Application.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        System.out.println("Countries in Database:");

        countryService.getAllCountries().forEach(System.out::println);

    }
}