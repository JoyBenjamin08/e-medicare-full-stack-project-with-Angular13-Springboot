package com.medicine.services;


import com.medicine.model.AuthenticationStatus;
import com.medicine.model.User;

public interface UserService {
	
	void insertUser(User user);
	 AuthenticationStatus getStatus(String username,String password);


}
