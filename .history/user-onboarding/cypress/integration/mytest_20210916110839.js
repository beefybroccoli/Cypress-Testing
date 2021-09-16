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
    cy.get('[name="email"]').type("samchan@yahoo.com");
    cy.get('[name="password"]').type("password1");
    cy.get('[name="termsOfService"]').check();
    cy.get('[name="role"]').select("Sales");
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
      expect(response.body).property("email").to.equal("tom@hank.com");
    });
  });

  /*
  axios.post(API_URL, stateFormData).then((response) => {
      props.set_stateUser(response.data);
  */

  it("sample test", () => {
    expect(1 + 2).to.equal(3);
    expect(1 + 2).not.to.equal(4);
  });
});
