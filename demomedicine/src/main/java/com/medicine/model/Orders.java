package com.medicine.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="orders")
public class Orders {
	
	@Id
	@Column(name="order_id")
	  private int orderid;
	@Column(name = "user_id", nullable = false, length = 10)
	  private int userid;
	@Column(name="total_price")
	  private int totalprice;
	@Column(name="order_date")
	  private String orderdate;
	
	
	
	public Orders(int orderid,int userid,int totalprice,String orderdate) {
		this.orderid=orderid;
		this.userid=userid;
		this.totalprice=totalprice;
		this.orderdate=orderdate;
	}
     public Orders() {
    	// TODO Auto-generated constructor stub
	}
	
	 public  int getorderid() {
	 		return orderid;
	 	}
	 public void setorderid(int orderid) {
			this.orderid = orderid;
		}
	 
	 
	 public  int getuserid() {
			return userid;
		}
		public void setuserid(int userid) {
			this.userid = userid;
		}
		
		
		public  int gettotalprice() {
			return totalprice;
		}
		public void settotalprice(int totalprice) {
			this.totalprice = totalprice;
		}
		public String getorderdate() {
			return orderdate;
		}
		
		public void setorderdate(String orderdate) {
			this.orderdate = orderdate;
		}
		

}