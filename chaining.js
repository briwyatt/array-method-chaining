console.log("hello chaining array exercise");

// Instructions: Using one single line of JavaScript code, complete the following tasks on the array of integers below.
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
console.log("integers", integers);
// sort in decending order (biggest # -> smallest #)      .sort(function(a, b){return b-a}
// remove integers greater than 19                        .filter()
// multiply each [i] * 1.5 then subtract - 1              .map()
// console.log("sumOfRemainingInts",sumOfRemainingInts);  .reduce()


var printInts = integers.sort(function(a, b) { return b - a}).filter(function(nums){return nums < 19}).map(function(nums){return nums = (nums * 1.5) -1}).reduce(function(prev, curr) {return prev + curr})

var output = document.getElementById("output-target");
output.innerHTML = printInts;
console.log("printInts",printInts);