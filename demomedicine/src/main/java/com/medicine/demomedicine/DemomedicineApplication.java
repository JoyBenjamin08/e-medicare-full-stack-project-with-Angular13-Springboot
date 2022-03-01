package com.medicine.demomedicine;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication
@ComponentScan({"com.*"})
@EnableJpaRepositories("com.medicine.repository")
@EntityScan("com.medicine.model")
public class DemomedicineApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemomedicineApplication.class, args);
	}

}
