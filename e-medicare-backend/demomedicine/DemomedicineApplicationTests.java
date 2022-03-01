package com.medicine.demomedicine;


import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.medicine.model.Cart;
import com.medicine.repository.CartRepository;
@SpringBootTest

class DemomedicineApplicationTests {

	@Autowired
	CartRepository cartRepository;

	@Test
	
	public void addCart() {
		Cart cart = new Cart();
		cart.setId(1562);
		cart.setitemId(15);
		cart.setquantity("200");
		
		assertNotNull(cartRepository.findById(1562).get());
	}
	@Test
	public void AllCart() {		
			List<Cart> list = cartRepository.findAll();
			assertThat(list).size().isGreaterThan(0);
		}

	@Test
	public void Cart() {
		Cart cart = cartRepository.findById(1562).get();
		assertEquals(1562, cart.getId());


}
}
	
			
		
	



		
			