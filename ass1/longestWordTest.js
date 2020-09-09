"use strict";
/* global  longest assert */
describe(" longest", function() {

    it("adiition of values yoni, samri ,son is 5", function() {
      assert.equal( longest(["yoni", "samri", "son"]), 5);
    });
  
    it("adiition of values java, javascript ,phyton is 10", function() {
      assert.equal( longest(["java", "javascript", "phyton"]), 10);
    });  
  
  });