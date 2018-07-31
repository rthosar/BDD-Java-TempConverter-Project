package com.bdd.specs;

import com.bdd.specs.CentToFahrTempConverter;
import static org.junit.Assert.*;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TempConverterStepdef {
	
	CentToFahrTempConverter temp=new CentToFahrTempConverter();
	double actual_temparature;
	
	@Given("Open  a temparature converter and give {double}C in Centigrade")
	public void open_a_temparature_converter_and_give_C_in_Centigrade(Double int1) {
	    temp.setCentigrate_temp(int1);
	}

	@When("click on convert {string}")
	public void click_on_convert(String action) {
	    
		System.out.println(action);
		if(action.equals("CToF")){
			actual_temparature=temp.temp_converter();
			
		}
		
	}

	@Then("verify the temparature {double}F in Fahrenheit")
	public void verify_the_temparature_F_in_Fahrenheit(Double expected_temparature) {
	    System.out.println("Actual Temparature in Fahrenheit :" + actual_temparature);
	    System.out.println("Expected Temparature in Fahrenheit :" + expected_temparature);
		assertTrue(actual_temparature==expected_temparature?true:false);
	}

}
