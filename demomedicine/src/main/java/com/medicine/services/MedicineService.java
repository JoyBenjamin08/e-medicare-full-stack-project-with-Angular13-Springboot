package com.medicine.services;

import java.util.List;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicine.model.Medicine;
import com.medicine.repository.MedicineRepository;

@Service
public class MedicineService {
	@Autowired
	MedicineRepository medRepository;
	
	@Transactional
	public List<Medicine> fetchMedicines() {
		List<Medicine> medList=medRepository.findAll();
		return medList;
		
	}
	@Transactional
	public Medicine saveMedicine(Medicine medicine) {
		
		return medRepository.save(medicine);
		
	}
	@Transactional
	public void updateMedicine(Medicine med) {
		medRepository.save(med);	
	
	}
	
	@Transactional
	public void deleteMedicine(int medId) {
		//empRepository.delete(emp);	
		System.out.println("service method called");
		medRepository.deleteById(medId);
	
	}
	@Transactional 
	  public Medicine getMedicine(int id) { 
	  Optional<Medicine> optional= medRepository.findById(id);
	  Medicine med=optional.get();
	  return med;
	  

}


}
