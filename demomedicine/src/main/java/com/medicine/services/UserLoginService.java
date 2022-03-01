package com.medicine.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicine.model.UserLogin;
import com.medicine.repository.UserLoginRepository;


@Service
public class UserLoginService {

	@Autowired
	UserLoginRepository userloginRepository;

	public UserLogin validateUserLogin(UserLogin userlogin) {
		UserLogin ul=userloginRepository.validateUserLogin(userlogin.getUserid(),userlogin.getPassword());
		
		return ul;
	}
	
	public UserLogin validateUserLogin1(UserLogin userlogin1) {
		UserLogin ul1=userloginRepository.validateUserLogin(userlogin1.getUserid(),userlogin1.getPassword());
		
		return ul1;
	}
	
}