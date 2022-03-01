package com.medicine.demomedicine;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.medicine.repository.UserLoginRepository;
import com.medicine.model.UserLogin;

@SpringBootTest
class DemomedicineApplicationTestsTest4 {

	@Autowired
	UserLoginRepository userloginRepository;
@Test
	
	public void addUserLogin() {
UserLogin userlogin = new UserLogin();
userlogin.setUserid(1562);
userlogin.setPassword("backgrp");	
		assertNotNull(userloginRepository.findByPassword("backgrp").get());
	}
	public void AllUserLogin() {		
			List<UserLogin> list = userloginRepository.findAll();
			assertThat(list).size().isGreaterThan(0);
		}
	@Test
	public void UserLogin() {
		UserLogin userlogin = userloginRepository.findByPassword("backgrp").get();
		assertEquals(1562, userlogin.getUserid());

	}

}
