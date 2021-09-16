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

  it("test request() with query parameters", ()=)

  it("sample test", () => {
    expect(1 + 2).to.equal(3);
    expect(1 + 2).not.to.equal(4);
  });
});
