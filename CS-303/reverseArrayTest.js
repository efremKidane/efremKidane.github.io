"use strict";
/* global  reverseArray assert */

describe(" reverseArray", function() {

    it("reverse of a,  b, c is c ,b ,a", function() {
      assert.deepEqual(  reverseArray(["a", "b", "c"]), (["c", "b", "a"]));
    });
  
    it("reverse of 1, 3, 4 is 4, 3, 1", function() {
      assert.deepEqual(  reverseArray([1, 3 ,4]), ([4, 3, 1]));
    });  
  
  });