describe("testing app", () => {

    beforeEach(()=>{
        cy.visit('http://localhost')
    })

  it("sample test", () => {
    expect(1 + 2).to.equal(3);
    expect(1 + 2).not.to.equal(4);  
  });
});
