package com.ecomapp.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecomapp.dao.UserRepository;
import com.ecomapp.model.User;

@RestController
@CrossOrigin(origins = {"http://localhost:4200","https://4200-b2a3aa64-8f85-4105-a6c0-4cbcded98460.ws-ap0.gitpod.io"})
public class UserController {

	private final UserRepository userRepository;

	/* public UserController() { } */
	public UserController(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	@GetMapping("/users")
	public List<User> getUsers()
	{
		return (List<User>) userRepository.findAll();
	}
	@PostMapping("/users")
	public void addUser(@RequestBody User user)
	{
		userRepository.save(user);
	}
}

