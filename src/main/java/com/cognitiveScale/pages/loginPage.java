package com.cognitiveScale.pages;

import java.sql.Time;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginPage {

@FindBy(id = "user_login") WebElement usernameTextbox;
@FindBy(xpath = "//*[@id='signup-form']/auto-check[1]/dl/dd/p") WebElement usernameError;

@FindBy(id = "user_email") WebElement emailTextbox;
@FindBy(xpath = "//*[@id='signup-form']/auto-check[2]/dl/dd/p") WebElement emailError;

@FindBy(id = "user_password") WebElement passwordTextbox;
@FindBy(xpath = "//*[@id='signup-form']/auto-check[3]/dl/dd/p") WebElement passwordError;
@FindBy(css ="span.text-red:nth-child(1)") WebElement passwordMoreThan15Character;
@FindBy(css ="span.text-red:nth-child(2)") WebElement passwordAtleast7Character;
@FindBy(css ="span.text-red:nth-child(3)") WebElement passwordIncludeNumber;


public static WebDriver driver;

String appURL = "https://github.com/join";

@Given("^Login to the application$")
public void login_to_the_application() throws Throwable {
	System.out.println(System.getProperty("user.dir"));
	System.setProperty("webdriver.gecko.driver",System.getProperty("user.dir")+"/lib/geckodriver");
	driver = new FirefoxDriver();
	driver.manage().timeouts().implicitlyWait(60,TimeUnit.SECONDS);
	driver.manage().window().maximize();
	driver.get(appURL);
}

@When("^Enter Any Invalid Value in the following field:(.*) (.*) (.*)$")
public void enter_Any_Invalid_Value_in_the_following_field(String username, String emailadd, String password) throws Throwable {
	//waitForElement("user_login");
	usernameTextbox = driver.findElement(By.id("user_login"));
	usernameTextbox.clear();
	usernameTextbox.sendKeys(username);
	
	emailTextbox = driver.findElement(By.id("user_email"));
	emailTextbox.clear();
	emailTextbox.sendKeys(emailadd);
	
	passwordTextbox = driver.findElement(By.id("user_password"));
	passwordTextbox.clear();
	passwordTextbox.sendKeys(password);
	
	
}

@Then("^Validate the Username Error message (.*)$")
public void validate_the_Username_Error_message(String title) throws Throwable {
	Thread.sleep(3000);
	usernameError = driver.findElement(By.xpath("//*[@id='signup-form']/auto-check[1]/dl/dd/p"));
	if (title.equalsIgnoreCase("scenario1")){

		Assert.assertEquals("Username is already taken", usernameError.getText());
	}
	else if (title.equalsIgnoreCase("scenario2")){
		
		Assert.assertEquals("Username is too long (maximum is 39 characters)", usernameError.getText());
	}

	driver.quit();
	
}

@Then("^Validate the Email Error message (.*)$")
public void validate_the_Email_Error_message(String title) throws Throwable {
	Thread.sleep(3000);
	emailError = driver.findElement(By.xpath("//*[@id='signup-form']/auto-check[2]/dl/dd/p"));
	if (title.equalsIgnoreCase("scenario1")){

		Assert.assertEquals("Email is invalid or already taken", emailError.getText());
	}
	else if (title.equalsIgnoreCase("scenario2")){
		
		Assert.assertEquals("Email is invalid or already taken", emailError.getText());
	}

	driver.quit();

}
@Then("^Validate the Password Error message (.*)$")
	public void validate_the_Password_Error_message(String title) throws Throwable {
		Thread.sleep(5000);
	
		if (title.equalsIgnoreCase("scenario1")){
			passwordMoreThan15Character = driver.findElement(By.cssSelector("span.text-red:nth-child(1)"));
			Assert.assertEquals("more than 15 characters", passwordMoreThan15Character.getText());
		}
		else if (title.equalsIgnoreCase("scenario2")){
			passwordMoreThan15Character = driver.findElement(By.cssSelector("span.text-red:nth-child(1)"));
			passwordAtleast7Character = driver.findElement(By.cssSelector("span.text-red:nth-child(2)"));
			Assert.assertEquals("more than 15 characters", passwordMoreThan15Character.getText());
			Assert.assertEquals("or at least 7 characters", passwordAtleast7Character.getText());
			
		}
		
		driver.quit();
		
}
public void waitForElement(WebDriver driver,String locator ){
	WebDriverWait wait = new WebDriverWait(driver, 30);
	wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy((By.id(locator))));
}
	
}
