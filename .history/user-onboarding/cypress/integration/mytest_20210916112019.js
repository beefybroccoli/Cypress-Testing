const API_URL = "https://reqres.in/api/users";

describe("testing app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("check for presence of elements", () => {
    cy.contains("Name");
    cy.contains("Email");
    cy.contains("Password");
    cy.contains("Terms of Service");
    cy.contains("Role");
    cy.contains("Submit");
  });

  it("modify input name", () => {
    cy.get('[name = "name"]').type("first name");
    cy.get('[name="validation_name"]').should("have.value", "");
    cy.get('[name="email"]').type("samchan@yahoo.com");
    cy.get('[name="validation_email"]').should("have.value", "");
    cy.get('[name="password"]').type("password1");
    cy.get('[name="validation_password"]').should("have.value", "");
    cy.get('[name="termsOfService"]').check();
    cy.get('[name="validation_termsOfService"]').should("have.value", "");
    cy.get('[name="role"]').select("Sales");
    cy.get('[name="validation_name"]').should("have.value", "");
    cy.get('[name="submit"]').click();
  });

  it("test request() with query parameters", () => {
    cy.request("POST", API_URL, {
      name: "tom",
      email: "tom@hank.com",
      password: "password1",
      termsOfService: "true",
      role: "sales",
    }).then((response) => {
      expect(response).property("status").to.equal(201);
      expect(response.body).property("name").to.equal("tom");
      expect(response.body).property("email").to.equal("tom@hank.com");
      expect(response.body).property("password").to.equal("password1");
      expect(response.body).property("termsOfService").to.equal("true");
      expect(response.body).property("role").to.equal("sales");
    });
  });
});

describe("testing app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("check for presence of elements", () => {
    cy.get('[name = "name"]').type("first name").clear();
    // cy.get('[name="validation_name"]').
    cy.get('[name="email"]').type("samchan@yahoo.com").clear();
    cy.get('[name="password"]').type("password1").clear();
    cy.get('[name="termsOfService"]').check().uncheck();
    cy.get('[name="role"]').select("Sales").select("");
    cy.contains("Submit");
  });
});

describe("sanity test", () => {
  it("sample test", () => {
    expect(1 + 2).to.equal(3);
    expect(1 + 2).not.to.equal(4);
  });
});
