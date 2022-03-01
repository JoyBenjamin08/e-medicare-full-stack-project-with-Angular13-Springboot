package com.medicine.demomedicine;


import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.medicine.model.Admin;
import com.medicine.repository.AdminRepository;
@SpringBootTest
class DemomedicineApplicationTestsTest2 {
	@Autowired
	AdminRepository adminRepository;

	@Test
	
	public void addAdmin() {
		Admin admin = new Admin();
		admin.setAdminid(1191);
		admin.setPassword("backend");
		
		
		assertNotNull(adminRepository.findByPassword("backend").get());
	}
	@Test
	public void AllAdmin() {		
			List<Admin> list = adminRepository.findAll();
			assertThat(list).size().isGreaterThan(0);
		}

	@Test
	public void Admin() {
		Admin admin = adminRepository.findByPassword("backend").get();
		assertEquals(1191, admin.getAdminid());


		

	}
}
