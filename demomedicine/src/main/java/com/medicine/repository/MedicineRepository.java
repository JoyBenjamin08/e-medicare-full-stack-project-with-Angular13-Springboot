package com.medicine.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medicine.model.Medicine;



@Repository
public interface MedicineRepository extends JpaRepository<Medicine ,Integer> {


}
