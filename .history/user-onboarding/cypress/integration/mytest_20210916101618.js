describe("testing app", () => {

    beforeEach(()=>{
        cy.visit()
    })

  it("sample test", () => {
    expect(1 + 2).to.equal(3);
    expect(1 + 2).not.to.equal(4);  
  });
});
