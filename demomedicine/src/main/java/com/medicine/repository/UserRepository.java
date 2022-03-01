package com.medicine.repository;





import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medicine.model.User;
@Repository
public interface UserRepository extends JpaRepository<User,Integer>
 {
	User findByUsernameAndPassword(String username,String password );


}
