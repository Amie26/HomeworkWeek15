package com.studentapp.studentinfo;

import com.studentapp.model.StudentPojo;
import com.studentapp.testbase.TestBase;
import io.restassured.response.Response;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static io.restassured.RestAssured.given;

public class StudentDeleteTest  extends TestBase {

    @Test
    public void deleteRecord() {

        Response response = given()
                .pathParam("id", 10) //this is from the {{1}} in postman
                .when()
                .delete("/{id}");
        response.then().statusCode(204);

        response.prettyPrint();

    }

}
