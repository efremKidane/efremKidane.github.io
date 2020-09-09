"use strict";
/* global  reverseArray assert */

describe(" reverseArray", function() {

    it("reverse of a,  b, c is c ,b ,a", function() {
      assert.equal(  reverseArray(["c", "b", "a"]), (["a", "b", "c"]));
    });
  
    it("reverse of 1, 3, 4 is 4, 3, 1", function() {
      assert.equal(  reverseArray([4, 3 ,1]), ([1, 3, 4]));
    });  
  
  });