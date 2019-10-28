package com.ecomapp.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ecomapp.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{}
