package com.medicine.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medicine.model.Cart;


@Repository
public interface CartRepository extends JpaRepository<Cart ,Integer> {

	
}