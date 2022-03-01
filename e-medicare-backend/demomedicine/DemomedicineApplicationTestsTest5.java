package com.medicine.demomedicine;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.medicine.repository.OrderRepository;
import com.medicine.model.Orders;

@SpringBootTest
class DemomedicineApplicationTestsTest5 {
	@Autowired
	OrderRepository orderRepository;
@Test
	
	public void addOrders() {
Orders orders = new Orders();
orders.setuserid(1562);
orders.setorderdate("2022-12-01 00:00:00.000000");
orders.setorderid(206);
orders.settotalprice(1255);
		assertNotNull(orderRepository.findByorderdate("2022-12-01 00:00:00.000000").get());
	}
	public void AllOrders() {		
			List<Orders> list = orderRepository.findAll();
			assertThat(list).size().isGreaterThan(0);
		}
	@Test
	public void Orders() {
		Orders orders = orderRepository.findByorderdate("2022-12-01 00:00:00.000000").get();
		assertEquals(1562, orders.getuserid());

	}
	
}



