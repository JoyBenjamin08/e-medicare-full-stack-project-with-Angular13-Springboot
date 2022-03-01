package com.medicine.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medicine.exception.ResourceNotFoundException;
import com.medicine.model.Cart;
import com.medicine.services.CartService;



@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/v4") 
@RestController
public class CartController {
	@Autowired
	CartService cartService;

//http://localhost:9080/api/v1/getAllCart
	@GetMapping("/carts")
	public List<Cart> getCart() {
		List<Cart> cartList = cartService.fetchCart();

		return cartList;

	}

	// http://localhost:8080/api/v1/getCart/1
	@GetMapping("/carts/{user_id}")
	public ResponseEntity<Cart> getCartById(@PathVariable("user_id") int user_id)
			throws ResourceNotFoundException {
		Cart cart = cartService.getCart(user_id);
		return ResponseEntity.ok().body(cart);
	}

	// http://localhost:8080/api/v1/saveCart
	@PostMapping("/cart")
	public Cart addtoCart(@RequestBody Cart c) {

		Cart cart = cartService.savecart(c);

		// return new ResponseEntity<>("Employee added successsfully", HttpStatus.OK);
		return cart;
	}

	// http://localhost:8080/api/v1/updateCart/2
	@PutMapping("/cart/{id}")
	public ResponseEntity<Cart> updateCart(@PathVariable("id") int userId,
			@RequestBody Cart cartDetails) throws ResourceNotFoundException {
		
		Cart cart = cartService.getCart(userId);


		cart.setquantity(cartDetails.getquantity());
		cart.setitemId(cartDetails.getitemId());
		final Cart updatedCart = cartService.savecart(cart);
		return ResponseEntity.ok(updatedCart);
	}
	
	//http://localhost:8080/api/v1/deleteCart/1
		@DeleteMapping(value = "/cart/{user_id}")
		public ResponseEntity<Object> deleteCart(@PathVariable("user_id") int user_id) {

			cartService.deleteCart(user_id);
			return new ResponseEntity<>("item deleted successsfully", HttpStatus.OK);
		}


}