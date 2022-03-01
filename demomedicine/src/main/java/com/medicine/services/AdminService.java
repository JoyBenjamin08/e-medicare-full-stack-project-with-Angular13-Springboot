package com.medicine.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.medicine.model.Admin;
import com.medicine.repository.AdminRepository;


@Service
public class AdminService {

	@Autowired
	AdminRepository adminRepository;
	
	@Transactional

	public Admin validateAdmin(Admin admin) {
		Admin a=adminRepository.validateAdmin(admin.getAdminid(),admin.getPassword());
		
		return a;
	}
	
}

		

