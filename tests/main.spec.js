var expect = require('chai').expect


describe("Main", () => {
  var arr;
  //roda uma vez antes do bloco
  before(() => {
    console.log("before");
  });

  //roda uma vez, depois do bloco
  after(() => {
    console.log("after");
  });

  //roda todas as vezes antes de cada bloco
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  // //roda todas as vezes depois de cada bloco
  // afterEach(() => {
  //   console.log("afterEach");
  // });

  //testar tipo ou se existe -> smoke test
  it('should be an array',()=>{
    expect(arr).to.be.an('array')
  })

  it("should have a size of 4 when push another value to the array", () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4)
  });
  it("should have a size of 2 when pop a value form the array", () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2)
  });
  it("should remove the value 3 when use pop in the array", () => {
    arr.pop()
    expect(arr).to.not.include(3)
  });

  it("should return true when pop 3 from the array", ()=>{
    expect(arr.pop() === 3).to.be.true
  })

});
