package com.telecom.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//resources//features",
					 glue = "com.telecom.stepdefinition",
				   plugin = {"html:target//report.html","json:target/report.json"},
			   monochrome = true, 
				   dryRun = false)

public class TestRunner {

}
