package com.cognizant.ormlearnex4;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.ormlearnex4.model.Country;
import com.cognizant.ormlearnex4.service.CountryService;

@SpringBootApplication
public class OrmLearnEx4Application implements CommandLineRunner {

    @Autowired
    CountryService service;

    public static void main(String[] args) {

        SpringApplication.run(OrmLearnEx4Application.class,args);

    }

    @Override
    public void run(String... args){

        System.out.println("Finding Country...");

        Country country = service.findCountry("IN");

        if(country!=null){

            System.out.println(country);

        }
        else{

            System.out.println("Country Not Found");

        }

    }

}