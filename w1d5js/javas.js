//Test function
function myFunctionTest(expected, result) {
    if (expected === result) {
        return "TEST SUCCEEDED.";
    } else {
        return "TEST FAILED. Expected " + expected + " " + " found " + result;
    }

}

function myFunctionTest2(expec, found) {
    for (let i = 0; i < expec.length; i++) {
        if (expec[i] !== found[i]) {
            return "TEST FAILED. Expected " + expec + " " + " found " + found;
        }
        return "TEST SUCCEEDED.";
    }
}

// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
function max(num1, num2) {
    if (num1 < num2) {
        return num2;
    } else {
        return num1;
    };
}

//Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(num1, num2, num3) {
    return (max(max(num1, num2), num3));
}

//Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(c) {
    let vowel = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < vowel.length; i++) {
        if (c === vowel[i]) {
            return true;
        }

    }
    return false;
}

//Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function multiply(mul) {
    let product = 1;
    for (let i = 0; i < mul.length; i++) {
        product *= mul[i];
    }
    return product;
}

//Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverseString(str) {
    let splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongWord(l) {
    let longestWord = l[0];

    for (let i = 1; i < l.length; i++) {
        if (longestWord.length < l[i].length) {
            longestWord = l[i];
        }
    }
    return longestWord;
}

// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

function filterLongWords(s, n) {
    let filteredWords = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i].length > n) {
            filteredWords.push(s[i]);
        }
    }
    return filteredWords;
}
//multiply each element by 10; 
function multiplybyTen(a) {
    const b = a.map(function (elem, i, array) {
        return elem * 10;
    });
    return b;
}

// return array with all elements equal to 3; 
function equalToThree(a) {
    const c = a.filter(function (elem, i, array) {
        return elem === 3;
    });
    return c;
}
//return the product of all elements;
function productOfAllElts(a) {
    const d = a.reduce(function (prevValue, elem, i, array) {
        return prevValue * elem;
    }, 1);
    return d;

}
//Test case for max
console.log("Expected output of max(10,12) is 12 " + myFunctionTest(12, max(10, 12)));
console.log("Expected output of max(55,25) is 55 " + myFunctionTest(25, max(55, 25)));

//Test case for maxThree
console.log("Expected output of maxOfThree(15, 25, 55) is 55 " + myFunctionTest(55, maxOfThree(15, 25, 55)));
console.log("Expected output of maxOfThree(15, 25, 55) is 55 " + myFunctionTest(55, maxOfThree(15, 25, 55)));

//Test case for isVowe'
console.log("Expected output of isVowel(u) is true " + myFunctionTest(true, isVowel("u")));
console.log("Expected output of isVowel(i) is false " + myFunctionTest(false, isVowel("i")));

//Test case for sum
console.log("Expected output of sum(10,12, 5, 8) is 35 " + myFunctionTest(35, sum([10, 12, 5, 8])));
console.log("Expected output of sum(10,12, 5) is 27 " + myFunctionTest(17, sum([10, 12, 5])));


//Test case for multiply
console.log("Expected output of multiply(2, 4, 5) is 40 " + myFunctionTest2(40, multiply([2, 4, 5])));
console.log("Expected output of multiply(8,2) is 16 " + myFunctionTest2(10, multiply([8, 2])));

//Test case for reverse
console.log("Expected output of reverse(feven) is nevef " + myFunctionTest("nevef", reverseString("feven")));
console.log("Expected output of reverse(betty) is ytteb " + myFunctionTest("yttjk", reverseString("betty")));

// Test case for find longest word
console.log("Expected output of findLongWord(pawlos, feven, bisrat) is pawlos " + myFunctionTest("pawlos", findLongWord(["pawlos", "feven", "bisrat"])));
console.log("Expected output of findLongWord(pawlos, feven, bisrat) is feven " + myFunctionTest("feven", findLongWord(["pawlos", "feven", "bisrat"])));

//Test case for filter longest word
console.log("Expected output of filterLongWords(bet, bett, betty) is be " + myFunctionTest2(["be"], filterLongWords(["bet", "bett", "betty"], 4)));
console.log("Expected output of filterLongWords(bet, bett, betty) is betty " + myFunctionTest2(["betty"], filterLongWords(["bet", "bett", "betty"], 4)));

//Test case for multiplyByTen
console.log("Expected output of multiplybyTen([2, 1, 3]) is 20, 10, 30 " + myFunctionTest2([20, 10, 30], multiplybyTen([2, 1, 3])));
console.log("Expected output of multiplybyTen([2, 1, 3]) is 2, 5, 30 " + myFunctionTest2([2, 5, 30], multiplybyTen([2, 1, 3])));


//////////////////////////////////////////////////////CONSOLE.ASSERT()//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////CONSOLE.ASSERT()///////////////////////////////////////////////////////////////////////////// 

const errorMsg = 'Test failed!';
// Test case for max
console.assert(10 === (max(10, 12)), errorMsg, "Expected: " + 100 + "  found " + max(10, 12));

//Test case for maxOfThree
console.assert(25 === maxOfThree(15, 25, 55), errorMsg, "Expected: " + 25 + " found " + maxOfThree(15, 25, 55));

// Test case for isVowel
console.assert(("u" === isVowel("u")) ? successmsg : errorMsg);

//sum
console.assert(25 === sum[10, 12, 5, 8], errorMsg, "Expected: " + 25 + " Found: " + sum([10, 12, 5, 8]));

//multiply([2, 4, 5])
console.assert(25 === multiply[2, 4, 5], errorMsg, "Expected: " + 25 + " Found: " + multiply([2, 4, 5]));

//reverseString
console.assert("betty" === reverseString("yttbe"), errorMsg, "Expected: " + "betty" + " Found: " + reverseString("yttbe"));

//findLongWord
let a = findLongWord(["pawlos", "feven", "bisrat"]);
let b = ["feven"];
console.assert(b.toString() === a.toString(), errorMsg, "Expected: " + "feven" + " Found: " + findLongWord(["pawlos", "feven", "bisrat"]));

//filterLongWords(["bet", "bett", "betty"], 4)
let c = filterLongWords(["bet", "bett", "betty"], 4);
let d = ["bett"];
console.assert(c.toString() === d.toString(), errorMsg, "Expected: " + "bett" + " Found: " + filterLongWords(["bet", "bett", "betty"], 4));

// multiplybyTen
let e = multiplybyTen([2, 1, 3]);
let f = [10, 10, 30];
console.assert(e.toString() === f.toString(), errorMsg, "Expected: " + "[10, 10, 30]" + " Found: " + multiplybyTen([2, 1, 3]));