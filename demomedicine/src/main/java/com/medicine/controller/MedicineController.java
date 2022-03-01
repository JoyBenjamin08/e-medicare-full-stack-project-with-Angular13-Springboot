package com.medicine.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medicine.exception.ResourceNotFoundException;
import com.medicine.model.Medicine;
import com.medicine.services.MedicineService;



@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/v4")
@RestController
public class MedicineController {
	@Autowired
	MedicineService medService;

//http://localhost:8080/api/v1/getAllMedicines
	@GetMapping("/Medicines")
	public List<Medicine> getMedicine() {
		List<Medicine> medList = medService.fetchMedicines();

		return medList;

	}
	

	// http://localhost:8080/api/v1/getMedicine/1
	@GetMapping("/Medicine/{id}")
	public ResponseEntity<Medicine> getMedicineByid(@PathVariable("id") int id)
			throws ResourceNotFoundException {
		Medicine medicine = medService.getMedicine(id);
		return ResponseEntity.ok().body(medicine);
	}

	// http://localhost:8080/api/v1/saveMedicine
	@PostMapping("/Medicine")
	public Medicine addMedicine(@RequestBody Medicine med) {

		Medicine medicine = medService.saveMedicine(med);

		// return new ResponseEntity<>("Medicine added successfully", HttpStatus.OK);
		return medicine;
	}

	// http://localhost:8080/api/v1/updateMedicine/2
	@PutMapping("/Medicine/{id}")
	public ResponseEntity<Medicine> updateMedicine(@PathVariable("id") int medicineId,
			@RequestBody Medicine medicineDetails) throws ResourceNotFoundException {
		Medicine medicine = medService.getMedicine(medicineId);

		medicine.setMedName(medicineDetails.getMedName());
		
		medicine.setManfDate(medicineDetails.getManfDate());
		medicine.setExpDate(medicineDetails.getExpDate());
		medicine.setDescription(medicineDetails.getDescription());
		medicine.setPrice(medicineDetails.getPrice());
		
		medicine.setStatus(medicineDetails.getStatus());
		final Medicine updatedMedicine = medService.saveMedicine(medicine);
		return ResponseEntity.ok(updatedMedicine);
	}

//http://localhost:8080/api/v1/deleteMedicine/1
	@DeleteMapping(value = "/Medicine/{medicineId}")
	public ResponseEntity<Object> deleteEmployee(@PathVariable("medicineId") int medId) {

		medService.deleteMedicine(medId);
		return new ResponseEntity<>("Medicine deleted successsfully", HttpStatus.OK);
	}
	

}
