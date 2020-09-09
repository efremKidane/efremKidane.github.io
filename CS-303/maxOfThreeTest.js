"use strict";
/* global maxOfThree assert */
describe("maxOfThree", function() {

    it("max of 1,2,3 is 3", function() {
      assert.equal(maxOfThree(1,2, 3), 3);
    });
  
    it("max of -4,6,-8 is 6", function() {
      assert.equal(maxOfThree(-4,6,-8),6);
    });  
  
  });