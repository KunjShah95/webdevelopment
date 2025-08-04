# Here's a comprehensive guide to the array methods in JavaScript

1. **concat()**: This method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

```javascript
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let newArray = array1.concat(array2);
console.log(newArray); // Outputs: [1, 2, 3, 4, 5, 6]
```

2 **copyWithin()**: This method copies part of an array to another location in the same array and returns it, without modifying its length.

```javascript
let array = [1, 2, 3, 4, 5];
array.copyWithin(0, 3);
console.log(array); // Outputs: [4, 5, 3, 4, 5]
```

3 **entries()**: This method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

```javascript
let array = ['a', 'b', 'c'];
let iterator = array.entries();
console.log(iterator.next().value); // Outputs: [0, 'a']
```

4 **every()**: This method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```javascript
let array = [1, 30, 39, 29, 10, 13];
let isBelowThreshold = array.every(function (element) {
  return element < 40;
});
console.log(isBelowThreshold); // Outputs: true
```

5 **fill()**: This method fills all the elements of an array from a start index to an end index with a static value.

```javascript
let array = [1, 2, 3, 4];
array.fill(0, 2, 4);
console.log(array); // Outputs: [1, 2, 0, 0]
```

6 **filter()**: This method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
let array = [12, 5, 8, 130, 44];
let filtered = array.filter(function (element) {
  return element >= 10;
});
console.log(filtered); // Outputs: [12, 130, 44]
```

7 **find()**: This method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.

```javascript
let array = [5, 12, 8, 130, 44];
let found = array.find(function (element) {
  return element > 10;
});
console.log(found); // Outputs: 12
```

8 **findIndex()**: This method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.

```javascript
let array = [5, 12, 8, 130, 44];
let isLargeNumber = function (element) {
  return element > 13;
};
console.log(array.findIndex(isLargeNumber)); // Outputs: 3
```

9 **flat()**: This method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```javascript
let array = [1, 2, [3, 4, [5, 6]]];
let flattened = array.flat(2);
console.log(flattened); // Outputs: [1, 2, 3, 4, 5, 6]
```

10 **flatMap()**: This method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1.

```javascript
let array = [1, 2, 3, 4];
let mapped = array.flatMap(function (x) {
  return [x * 2];
});
console.log(mapped); // Outputs: [2, 4, 6, 8]
```

11 **forEach()**: This method executes a provided function once for each array element.

```javascript
let array = ['a', 'b', 'c'];
array.forEach(function (element) {
  console.log(element);
});
// Outputs: 'a', 'b', 'c'
```

12 **includes()**: This method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```javascript
let array = [1, 2, 3];
console.log(array.includes(2)); // Outputs: true
```

13 **indexOf()**: This method returns the first index at which a given element can be found in the array, or -1 if it is not present.

```javascript
let array = [2, 9, 9];
console.log(array.indexOf(9)); // Outputs: 1
```

14 **join()**: This method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.

```javascript
let array = ['Fire', 'Air', 'Water'];
console.log(array.join()); // Outputs: 'Fire,Air,Water'
```

15 **keys()**: This method returns a new Array Iterator object that contains the keys for each index in the array.

```javascript
let array = ['a', 'b', 'c'];
let iterator = array.keys();
console.log(iterator.next().value); // Outputs: 0
```

16 **lastIndexOf()**: This method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

```javascript
let array = [2, 5, 9, 2];
console.log(array.lastIndexOf(2)); // Outputs: 3
```

17 **map()**: This method creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
let array = [1, 4, 9, 16];
let map = array.map(function (x) {
  return x * 2;
});
console.log(map); // Outputs: [2, 8, 18, 32]
```

18 **pop()**: This method removes the last element from an array and returns that element. This method changes the length of the array.

```javascript
let array = [1, 2, 3];
let lastElement = array.pop();
console.log(lastElement); // Outputs: 3
```

19 **push()**: This method adds one or more elements to the end of an array and returns the new length of the array.

```javascript
let array = [1, 2, 3];
array.push(4);
console.log(array); // Outputs: [1, 2, 3, 4]
```

20 **reduce()**: This method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

```javascript
let array = [1, 2, 3, 4];
let reducer = function (accumulator, currentValue) {
  return accumulator + currentValue;
};
console.log(array.reduce(reducer)); // Outputs: 10
```

21 **reduceRight()**: This method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

```javascript
let array = [[0, 1], [2, 3], [4, 5]];
let result = array.reduceRight(function (accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);
console.log(result); // Outputs: [4, 5, 2, 3, 0, 1]
```

22 **reverse()**: This method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

```javascript
let array = ['one', 'two', 'three'];
array.reverse();
console.log(array); // Outputs: ['three', 'two', 'one']
```

23 **shift()**: This method removes the first element from an array and returns that removed element. This method changes the length of the array.

```javascript
let array = [1, 2, 3];
let firstElement = array.shift();
console.log(firstElement); // Outputs: 1
```

24 **slice()**: This method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

```javascript
let array = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(array.slice(2)); // Outputs: ['camel', 'duck', 'elephant']
```

25 **some()**: This method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

```javascript
let array = [1, 2, 3, 4, 5];
let even = function (element) {
  return element % 2 === 0;
};
console.log(array.some(even)); // Outputs: true
```

26 **sort()**: This method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

```javascript
let array = [1, 30, 4, 21, 100000];
array.sort();
console.log(array); // Outputs: [1, 100000, 21, 30, 4]
```

27 **splice()**: This method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```javascript
let array = ['Jan', 'March', 'April', 'June'];
array.splice(1, 0, 'Feb');
console.log(array); // Outputs: ['Jan', 'Feb', 'March', 'April', 'June']
```

28 **toLocaleString()**: This method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”).

```javascript
let array = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
let localeString = array.toLocaleString();
console.log(localeString); // Outputs: '1,a,12/21/1997'
```

29 **toString()**: This method returns a string representing the specified array and its elements.

```javascript
let array = [1, 2, 'a', '1a'];
console.log(array.toString()); // Outputs: '1,2,a,1a'
```

30 **unshift()**: This method adds one or more elements to the beginning of an array and returns the new length of the array.

```javascript
let array = [1, 2, 3];
array.unshift(4, 5);
console.log(array); // Outputs: [4, 5, 1, 2, 3]
```

31 **values()**: This method returns a new Array Iterator object that contains the values for each index in the array.

```javascript
let array = ['a', 'b', 'c'];
let iterator = array.values();
console.log(iterator.next().value); // Outputs: 'a'
```
