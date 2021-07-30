
// Q1:- Define a filter function on the String object. The function accepts an array of strings that
// specifies a list of banned words. The function returns the string after removing all the
// banned words.
String.prototype.filter = function(...bannedwords){
    return bannedwords.reduce((acc,elem)=> {
        return acc = acc.indexOf(elem)>0 ? acc.replace(elem,""):acc},this);   
};


// Q2:- Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
//that works by repeatedly stepping through the list to be sorted,
Array.prototype.bubbleSort = function(){
    for(var i = 0; i < this.length; i++){        
        for(var j = 0; j < ( this.length - i -1 ); j++){
          if(this[j] > this[j+1]){
            var temp = this[j];
            this[j] = this[j + 1];
            this[j+1] = temp;
          }
        }
      } 
    return this; 
};

// Q3:- create the class Teacher and a method teach
var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

// TODO: create the class Teacher and a method teach

var Teacher = function() {};

Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject){
    return this.name + " is now teaching " + subject;
}

var teacher = new Teacher();

teacher.initialize("Joe", 45);


console.log("Q1:- chai has a lot of stuff, let's make assert global".filter("has ", 'let\'s ', 'assert'));

console.log("Q2:- Sorted array = "+[6,4,0, 3,-2,1].bubbleSort()); //[-2, 0, 1, 3, 4, 6]

console.log("Q3:- "+teacher.teach("WAP"));