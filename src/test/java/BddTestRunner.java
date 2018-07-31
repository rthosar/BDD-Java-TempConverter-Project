import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
monochrome=true,
features={"classpath:Temparature/TempConvereter.feature"},
glue={"com.bdd.specs"},
plugin={"pretty","html:target/cucumber","json:target/cucumber.json"}
)
public class BddTestRunner {

}
