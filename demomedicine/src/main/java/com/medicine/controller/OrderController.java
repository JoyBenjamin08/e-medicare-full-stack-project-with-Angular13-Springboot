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
import com.medicine.model.Orders;
import com.medicine.services.ViewOrderService;

@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/v4")
@RestController

public class OrderController {
	
	@Autowired
	com.medicine.services.ViewOrderService orderService;
	
	@GetMapping("/orders")
	public List<Orders> getViewOrders() {
		List<Orders> orderList = orderService.fetchorders();
        return orderList;
     }
	
	// http://localhost:8080/api/v1/getorder/1
			@GetMapping("/order/{orderid}")
			public ResponseEntity<Orders> getorder(@PathVariable("orderid") int orderid)
					throws ResourceNotFoundException {
				Orders vieworder = orderService.getorder(orderid);
				return ResponseEntity.ok().body(vieworder);
			}

			// http://localhost:8080/api/v1/addorder
			@PostMapping("/order")
			public Orders addorder(@RequestBody Orders view) {

				Orders vieworder = orderService.saveorder(view);

				return vieworder;
			}
			
			// http://localhost:8080/api/v1/updateorder/2
			@PutMapping("/order/{orderid}")
			public ResponseEntity<Orders> updateorder(@PathVariable("orderid") int orderid,
					@RequestBody Orders orderDetails) throws ResourceNotFoundException {
				Orders view = orderService.getorder(orderid);

				view.setorderid(orderDetails.getorderid());
				view.setuserid(orderDetails.getuserid());
				view.setorderdate(orderDetails.getorderdate());
				view.settotalprice(orderDetails.gettotalprice());
				final Orders updateorder = orderService.saveorder(view);
				return ResponseEntity.ok(updateorder);
			}

		
			@DeleteMapping(value = "/order/{orderid}")
			public ResponseEntity<Object> deleteorder(@PathVariable("orderid") int orderid) {

				orderService.deleteorder(orderid);
				return new ResponseEntity<>("order deleted successsfully", HttpStatus.OK);
			}
	
	

}
