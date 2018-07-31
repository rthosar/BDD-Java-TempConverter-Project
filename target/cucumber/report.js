$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Temparature/TempConvereter.feature");
formatter.feature({
  "name": "Develope a Centigrade to Fahrenheit",
  "description": "\tTemperature Converter... ",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Convert Temperature from Centigrade to Fahrenheit",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open  a temparature converter and give \u003ctemp\u003e in Centigrade",
  "keyword": "Given "
});
formatter.step({
  "name": "click on convert \"\u003caction\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "verify the temparature \u003coutput\u003e in Fahrenheit",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "temp",
        "action",
        "output"
      ]
    },
    {
      "cells": [
        "20.00C",
        "CToF",
        "68.00F"
      ]
    },
    {
      "cells": [
        "30.00C",
        "CToF",
        "86.00F"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Convert Temperature from Centigrade to Fahrenheit",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open  a temparature converter and give 20.00C in Centigrade",
  "keyword": "Given "
});
formatter.match({
  "location": "TempConverterStepdef.open_a_temparature_converter_and_give_C_in_Centigrade(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on convert \"CToF\"",
  "keyword": "When "
});
formatter.match({
  "location": "TempConverterStepdef.click_on_convert(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the temparature 68.00F in Fahrenheit",
  "keyword": "Then "
});
formatter.match({
  "location": "TempConverterStepdef.verify_the_temparature_F_in_Fahrenheit(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Convert Temperature from Centigrade to Fahrenheit",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open  a temparature converter and give 30.00C in Centigrade",
  "keyword": "Given "
});
formatter.match({
  "location": "TempConverterStepdef.open_a_temparature_converter_and_give_C_in_Centigrade(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on convert \"CToF\"",
  "keyword": "When "
});
formatter.match({
  "location": "TempConverterStepdef.click_on_convert(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the temparature 86.00F in Fahrenheit",
  "keyword": "Then "
});
formatter.match({
  "location": "TempConverterStepdef.verify_the_temparature_F_in_Fahrenheit(Double)"
});
formatter.result({
  "status": "passed"
});
});