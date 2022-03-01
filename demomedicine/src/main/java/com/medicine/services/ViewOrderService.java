package com.medicine.services;

import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.medicine.repository.OrderRepository;
import com.medicine.model.Orders;

@Service
public class ViewOrderService {
	
	@Autowired
	//TransactionsRepository transactionsRepository;
	//ItemsRepository itemsRepository;
	OrderRepository orderRep;
	
	@Transactional
    public List<Orders> fetchorders() {
	// TODO Auto-generated method stub
	List<Orders> orderList=orderRep.findAll();
	return orderList;
	}
	
	@Transactional
	public Orders saveorder(Orders view) {
		
		return orderRep.save(view);
		
	}
	@Transactional
	public void updateorder(Orders view) {
		orderRep.save(view);	
	
	}
	
	@Transactional
	public void deleteorder(int orderid) {
		//empRepository.delete(emp);	
		System.out.println("service method called");
		orderRep.deleteById(orderid);
	
	}
	@Transactional 
	  public Orders getorder(int orderid) { 
	  Optional<Orders> optional= orderRep.findById(orderid);
	  Orders vieworder=optional.get();
	  return vieworder;
	  

}

}
