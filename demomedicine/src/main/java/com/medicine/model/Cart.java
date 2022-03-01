package com.medicine.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="cart")
public class Cart {
	
	@Id
	@Column(name="user_id")
	private int id;
	
	@Column(name="quantity")
	private String quantity;
	@Column(name="item_id")
	private int itemId;
	
	
	public Cart( String quantity, int itemId) {
        super();
     
        this.quantity = quantity;
        this.itemId = itemId;
    }
	public Cart() {
		// TODO Auto-generated constructor stub
	}

	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getquantity() {
		return quantity;
	}
	public void setquantity(String quantity) {
		this.quantity = quantity;
	}
	public int getitemId() {
		return itemId;
	}
	public void setitemId(int itemId) {
		this.itemId = itemId;
	}
	

}