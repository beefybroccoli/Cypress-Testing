const API_URL = "https://reqres.in/api/users";
const HOME_PAGE = "http://localhost:3000";

describe("sanity test", () => {
  it("sample test", () => {
    expect(1 + 2).to.equal(3);
    expect(1 + 2).not.to.equal(4);
  });
});
describe("testing app", () => {
  beforeEach(() => {
    cy.visit(HOME_PAGE);
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
    cy.get('[name = "name"]').type("tom hank");
    cy.get('[name="validation_name"]').should("have.value", "");
    cy.get('[name="name"]').should("have.value", "tom hank");
    cy.get('[name="email"]').type("samchan@yahoo.com");
    cy.get('[name="validation_email"]').should("have.value", "");
    cy.get('[name="email"]').should("have.value", "samchan@yahoo.com");
    cy.get('[name="password"]').type("password1");
    cy.get('[name="validation_password"]').should("have.value", "");
    cy.get('[name="password"]').should("have.value", "password1");
    cy.get('[name="termsOfService"]').check();
    cy.get('[name="validation_termsOfService"]').should("have.value", "");
    cy.get('[name="termsOfService"]').should("have.value", "true");
    cy.get('[name="role"]').select("Sales");
    cy.get('[name="validation_role"]').should("have.value", "");
    cy.get('[name="role"]').should("have.value", "sales");

    cy.intercept("POST", API_URL).as("postRequest");

    cy.get('[name="submit"]').click();

    cy.wait("@postRequest").should((response) => {});
    // .then((response) => {
    //     expect(response.status).to.eq(201);
    //     expect(response.data.email).to.eq("tom@hank.com");
    //     expect(response.data.password).to.equal("password1");
    //     expect(response.data.name).to.equal("tom");
    //     expect(response.data.termsOfService).to.equal("true");
    //     expect(response.data.role).to.equal("sales");
    //     expect(response.data.id).to.not.equal("");
    //     expect(response.data.createdAt).to.not.equal("");
    //   });
  });
});

/*
https://egghead.io/blog/intercepting-network-requests-in-cypress
it('creating a board', () => {
  cy.intercept('POST', '/api/boards').as('createBoard')
  cy.visit('/')
  cy.get('[data-cy="create-board"]').click()
  cy.get('[data-cy=new-board-input]').type('new board{enter}')
  cy.wait('@createBoard').then(({response}) => {
    expect(response.statusCode).to.eq(201)
    expect(response.body.name).to.eq('new board')
  })
})
*/

describe("testing app", () => {
  beforeEach(() => {
    cy.visit(HOME_PAGE);
  });

  it("check for text validation", () => {
    cy.get('[name = "name"]').type("first name").clear();
    cy.get('[name="validation_name"]').its("length").should("be.gte", 0);
    cy.get('[name="email"]').type("samchan@yahoo.com").clear();
    cy.get('[name="validation_email"]').its("length").should("be.gte", 0);
    cy.get('[name="password"]').type("password1").clear();
    cy.get('[name="validation_password"]').its("length").should("be.gte", 0);
    cy.get('[name="termsOfService"]').check().uncheck();
    cy.get('[name="validation_termsOfService"]')
      .its("length")
      .should("be.gte", 0);
    cy.get('[name="role"]').select("Sales").select("");
    cy.get('[name="validation_role"]').its("length").should("be.gte", 0);
    cy.contains("Submit");
  });
});
