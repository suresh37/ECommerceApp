package com.ecomapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EcommerceApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcommerceApplication.class, args);
	}

	/*@Bean
	CommandLineRunner init(UserRepository userRepository)
	{
		return args -> {
			Stream.of("Suresh","Ramesh","Arun","Kumar")
			.forEach(name -> {
				User user = new User(name,name.toLowerCase()+"@domain.com");
				userRepository.save(user);
			});
			userRepository.findAll().forEach(System.out::println);
		};
	} */

	}
