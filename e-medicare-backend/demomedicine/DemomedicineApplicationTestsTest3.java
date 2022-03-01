package com.medicine.demomedicine;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.medicine.model.U_Signup;
import com.medicine.repository.U_SignupRepository;
@SpringBootTest
class DemomedicineApplicationTestsTest3 {

	@Autowired
	U_SignupRepository u_signupRepository;

	@Test
	
	public void addU_Signup() {
		U_Signup u_signup = new U_Signup();
		u_signup.setu_id(1563);
		u_signup.setfirstname("rama");
		u_signup.setlastname("reddy");
                u_signup.setemail("ram@gmail.com");
                u_signup.setgender("male");
                u_signup.setcontact_no(15967469);
                u_signup.setdob("2002-05-23");
                u_signup. setpassword("ramred");

		
		assertNotNull(u_signupRepository.findById(1563).get());
	}
	@Test
	public void AllU_Signup() {		
			List<U_Signup> list = u_signupRepository.findAll();
			assertThat(list).size().isGreaterThan(0);
		}

	@Test
	public void U_Signup() {
		U_Signup u_signup = u_signupRepository.findById(1563).get();
		assertEquals(1563, u_signup.getu_id());


}
}
