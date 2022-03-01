package com.medicine.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medicine.model.Cart;
import com.medicine.model.Orders;


@Repository
public interface OrderRepository extends JpaRepository<Orders,Integer>{

	Optional<Orders> findByorderdate(String string);

	

}
