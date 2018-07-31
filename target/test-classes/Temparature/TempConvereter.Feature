Feature: Develope a Centigrade to Fahrenheit
	Temperature Converter... 
	
	
	Scenario Outline: Convert Temperature from Centigrade to Fahrenheit
		Given Open  a temparature converter and give <temp> in Centigrade
		When click on convert "<action>"
		Then verify the temparature <output> in Fahrenheit
			
			Examples:
			| temp| action | output |
			| 20.00C | CToF   | 68.00F    |
			| 30.00C | CToF   | 86.00F    |
		