# shikshalokam-assignment
In the given assignment I have solved using javascript since I am comfortable with javascript
## Assignment 1:
subString(s) function:

Time Complexity (TC): O(n^2)
The outer loop runs 'n' times (where 'n' is the length of the string).
The inner loop runs 'n' times in the worst case, creating substrings.
Space Complexity (SC): O(n^2)
The array 'res' stores all possible substrings, and in the worst case, there can be 'n^2' substrings.

shortSub(substrings, x) function:

Time Complexity (TC): O(m)
The function iterates through the 'substrings' array, where 'm' is the total length of all substrings in the array.
Space Complexity (SC): O(1)
The function uses a constant amount of space for variables like 'result', 'minLength', and 'substring'.

## Assignment 2:
Time Complexity (TC): O(n)

The function iterates through each character in the input string once, where 'n' is the length of the string.
Space Complexity (SC): O(1)

The function uses a constant amount of space for variables like 'result', 'charCode', 'prevCharCode', 'newCharCode', and 'nextCharCode'.
The validateASCII function also uses a constant amount of space.
