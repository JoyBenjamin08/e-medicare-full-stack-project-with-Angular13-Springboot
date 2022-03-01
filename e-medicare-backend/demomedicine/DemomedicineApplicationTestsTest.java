package com.medicine.demomedicine;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.medicine.model.Medicine;
import com.medicine.repository.MedicineRepository;
@SpringBootTest
class DemomedicineApplicationTestsTest {

	@Autowired
	MedicineRepository medicineRepository;
    @Test
    public void addMedicine() {
    	Medicine medicine = new Medicine();
    	medicine.setId(12);
    	medicine.setMedName("ativian");
    	medicine.setManfDate("2021-01-01");
    	medicine.setExpDate("2022-02-02");
    	medicine.setDescription("cold");
    	medicine.setPrice(550);
    	medicine.setStatus("available");
    	
		assertNotNull(medicineRepository.findById(12).get());

    
}
@Test
public void AllMedicine() {		
		List<Medicine> list = medicineRepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

	
	@Test
	public void Medicine() {
		Medicine medicine = medicineRepository.findById(12).get();
		assertEquals(12, medicine.getId());
	}

}