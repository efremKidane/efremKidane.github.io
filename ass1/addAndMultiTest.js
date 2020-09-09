"use strict";
/* global sum assert */
describe("sum", function() {

    it("adiition of values 1, 2 ,3 is 6", function() {
      assert.equal(sum([1, 2, 3]), 6);
    });
  
    it("adiition of values 3, 3 ,2 is 8", function() {
      assert.equal(sum([3, 3, 2]), 8);
    });  
  
  });

  "use strict";
/* global multiply */
describe("multiply", function() {

    it("multiplication of values 1, 2 ,3 is 6", function() {
      assert.equal(multiply([1, 2, 3]), 6);
    });
  
    it("multiplication of values 3, 3 ,2 is 18", function() {
      assert.equal(multiply([3, 3, 2]), 18);
    });  
  
  });