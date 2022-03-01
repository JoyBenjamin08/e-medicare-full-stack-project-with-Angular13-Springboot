package com.medicine.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.medicine.model.Admin;
import com.medicine.model.Cart;



public interface AdminRepository extends JpaRepository<Admin, String>{
	@Query("SELECT a FROM Admin a WHERE a.adminid =?1 and a.password=?2")
			public Admin validateAdmin(int adminid,String password);

	public Optional<Admin> findByPassword(String string);


	
	


}