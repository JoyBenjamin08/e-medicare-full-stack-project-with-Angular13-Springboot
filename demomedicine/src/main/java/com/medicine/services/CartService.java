package com.medicine.services;

import java.util.List;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicine.repository.CartRepository;
import com.medicine.model.Cart;

@Service
public class CartService {
	@Autowired
	CartRepository cartRepository;
	
	@Transactional
	public List<Cart> fetchCart() {
		List<Cart> cartList=cartRepository.findAll();
		return cartList;
		
	}
	@Transactional
	public Cart savecart(Cart c) {
		
		return cartRepository.save(c);
		
	}
	@Transactional
	public void EditCart(Cart c) {
		cartRepository.save(c);	
	
	}
	
	@Transactional
	public void deleteCart(int user_id) {
		//empRepository.delete(cart);	
		System.out.println("service method called");
		cartRepository.deleteById(user_id);
	
	}
	@Transactional 
	  public Cart getCart(int id) { 
	  Optional<Cart> optional= cartRepository.findById(id);
	  Cart c=optional.get();
	  return c;
	  

}


}