package com.medicine.model;

import javax.persistence.Column;



import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="medicine")

public class Medicine {
	@Id
	
	@Column(name="medid")
	private int id;
	@Column(name="medName")
	private String medName;
	@Column(name="manfDate")
	private String manfDate;
	@Column(name="expDate")
	private String expDate;
	@Column(name="description")
	private String description;
	@Column(name="price")
	private int price;
	@Column(name="status")
	private String status;
	public Medicine(String medName, String manfDate, String expDate, String description, int price, String status) {
        super();
        this.medName = medName;
        this.manfDate = manfDate;
        this.expDate = expDate;
        this.description = description;
        this.price = price;
        this.status = status;
    }
	public Medicine() {
		// TODO Auto-generated constructor stub
	}

	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getMedName() {
		return medName;
	}
	public void setMedName(String medName) {
		this.medName = medName;
	}
	public String getManfDate() {
		return manfDate;
	}
	public void setManfDate(String manfDate) {
		this.manfDate = manfDate;
	}
	public String getExpDate() {
		return expDate;
	}
	public void setExpDate(String expDate) {
		this.expDate = expDate;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	


}
