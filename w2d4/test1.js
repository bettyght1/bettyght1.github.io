// chai has a lot of stuff, let's make assert global

let assert = chai.assert;

//Exercise 1:  Test the filter() method
describe("Removing banned words from sentence",()=>{
    it("should filter out all banned words",()=>{
        assert.deepEqual("chai has a lot of stuff, let's make assert global".filter("has ", 'let\'s ', 'assert'), "chai a lot of stuff, make global");
    });
});

//Exercise 2: Test the bubbleSort() method
describe("Sort an array using the BubbleSort algorithm",()=>{
    it("should sort the number elements in the array",()=>{
        assert.deepEqual([6,4,0, 3,-2,1].bubbleSort(), [-2, 0, 1, 3, 4, 6]);
    });
});

//Exercise 3: Test the teach() method of Teacher's object
describe("Display 'Joe is now teaching WAP' from teacher's object",()=>{
    var teacher = new Teacher();
    teacher.initialize("joe", 45);
    it("should pass subject as @param and display teacher's name and what he is teaching",()=>{
        assert.deepEqual(teacher.teach("WAP"), "Joe is now teaching WAP");
    });
});