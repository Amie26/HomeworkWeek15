$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/EndToEnd.feature");
formatter.feature({
  "line": 2,
  "name": "End to End",
  "description": "",
  "id": "end-to-end",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 9666012000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify user can navigate to Hot Deal page successfully",
  "description": "",
  "id": "end-to-end;verify-user-can-navigate-to-hot-deal-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on xcart Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Hot Deal Link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on Sale Link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Lace Boot Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I successfully navigate to Lace-Up Boot Link",
  "keyword": "Then "
});
formatter.match({
  "location": "EndToEndStepDefs.iAmOnXcartHomePage()"
});
formatter.result({
  "duration": 251164600,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndStepDefs.iClickOnHotDealLink()"
});
formatter.result({
  "duration": 211585600,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndStepDefs.iClickOnSaleLink()"
});
formatter.result({
  "duration": 2122405200,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndStepDefs.iClickOnLaceBootLink()"
});
formatter.result({
  "duration": 184017900,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndStepDefs.iSuccessfullyNavigateToLaceUpBootLink()"
});
formatter.result({
  "duration": 2231176200,
  "status": "passed"
});
formatter.after({
  "duration": 711928200,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "As a user I want to Login successfully",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sanity,"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 7963413700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should be able to Login successfully",
  "description": "",
  "id": "login;verify-user-should-be-able-to-login-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on xcart Sign In homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter email Id",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter registered password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I can Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStepDefs.iAmOnXcartSignInHomepage()"
});
formatter.result({
  "duration": 511460300,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefs.iEnterEmailId()"
});
formatter.result({
  "duration": 1181579400,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefs.iEnterRegisteredPassword()"
});
formatter.result({
  "duration": 198091700,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 156307300,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefs.iCanLoginSuccessfully()"
});
formatter.result({
  "duration": 53292600,
  "status": "passed"
});
formatter.after({
  "duration": 713082200,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/Register.feature");
formatter.feature({
  "line": 2,
  "name": "Register",
  "description": "As a user I want to register into xcart website",
  "id": "register",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke,"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 8232919200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should be able to register successfully",
  "description": "",
  "id": "register;verify-user-should-be-able-to-register-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am Sign In homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on new Account Link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter valid email",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Create Button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "registerStepDefs.iAmSignInHomepage()"
});
formatter.result({
  "duration": 508080200,
  "status": "passed"
});
formatter.match({
  "location": "registerStepDefs.iClickOnNewAccountLink()"
});
formatter.result({
  "duration": 1694485500,
  "status": "passed"
});
formatter.match({
  "location": "registerStepDefs.iEnterValidEmail()"
});
formatter.result({
  "duration": 2113228400,
  "status": "passed"
});
formatter.match({
  "location": "registerStepDefs.iEnterPassword()"
});
formatter.result({
  "duration": 249871200,
  "status": "passed"
});
formatter.match({
  "location": "registerStepDefs.iEnterConfirmPassword()"
});
formatter.result({
  "duration": 224641800,
  "status": "passed"
});
formatter.match({
  "location": "registerStepDefs.iClickOnCreateButton()"
});
formatter.result({
  "duration": 148731500,
  "status": "passed"
});
formatter.match({
  "location": "registerStepDefs.iRegisterSuccessfully()"
});
formatter.result({
  "duration": 391616900,
  "error_message": "java.lang.AssertionError: expected [The data has been saved successfully] but found [This email address is already in use by another user.]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.xcart.demostore.pages.RegisterPage.verifyMessage(RegisterPage.java:90)\r\n\tat com.xcart.demostore.MyStepDefs.registerStepDefs.iRegisterSuccessfully(registerStepDefs.java:50)\r\n\tat ✽.Then I register successfully(src/test/java/resources/featurefile/Register.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1487202700,
  "status": "passed"
});
});