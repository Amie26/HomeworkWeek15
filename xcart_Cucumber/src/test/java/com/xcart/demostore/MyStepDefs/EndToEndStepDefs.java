package com.xcart.demostore.MyStepDefs;

import com.xcart.demostore.pages.HotDealPage;
import com.xcart.demostore.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EndToEndStepDefs {
    HotDealPage hotDealPage = new HotDealPage();
    SignInPage signInPage = new SignInPage();



    @Given("^I am on xcart Home page$")
    public void iAmOnXcartHomePage() {
        signInPage.set_verifyMessage();
    }

    @And("^I click on Hot Deal Link$")
    public void iClickOnHotDealLink() {
        hotDealPage.clickOnHotDeal();
    }

    @And("^I click on Sale Link$")
    public void iClickOnSaleLink() throws InterruptedException {
        hotDealPage.selectSaleLink();
    }

    @When("^I click on Lace Boot Link$")
    public void iClickOnLaceBootLink() {
        hotDealPage.clickonLaceBootLink();
    }

    @Then("^I successfully navigate to Lace-Up Boot Link$")
    public void iSuccessfullyNavigateToLaceUpBootLink() {
        hotDealPage.actualLaceBootMessage();
    }
}
