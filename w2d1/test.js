
  describe("sum", function() {

    it("sums numbers in an array", function() {
      assert.equal(sum([2, 4, 6, 5]), 17);
    });
  
  });
  describe("multiply", function() {

    it("multiply numbers in an array", function() {
      assert.equal(multiply([2, 4, 6]), 48);
    });
  
  });
  describe("reverse", function() {

    it("reverses a string", function() {
      assert.equal(reverse("feven"), "nevef");
    });
  
  }); 

 describe("filterLongWords", function() {

    it("filters words longer than i", function() {
      assert.equal(filterLongWords(["feven", "function", "multiply", "sum", "user"], 6).toString(), ["function", "multiply"].toString());
    });
  
  }); 