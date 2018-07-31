package com.bdd.specs;

public class CentToFahrTempConverter {

	double centigrate_temp;
	double fahrenheit_temp;
	public double getCentigrate_temp() {
		return centigrate_temp;
	}
	public void setCentigrate_temp(Double int1) {
		this.centigrate_temp = int1;
	}
	public double getFahrenheit_temp() {
		return fahrenheit_temp;
	}
	public void setFahrenheit_temp(int fahrenheit_temp) {
		this.fahrenheit_temp = fahrenheit_temp;
	}
	
	public double temp_converter(){
		this.fahrenheit_temp=(this.centigrate_temp*1.8)+32;
		//System.out.println(this.fahrenheit_temp);
		return this.fahrenheit_temp;
	}
}
