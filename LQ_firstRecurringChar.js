// [2,1,3,2,4,1,5] return 2
// [2,1,1,3,2,4,1,5] return 1

// O(n) - Time and O(n) Space
function firstRecurringChar (input) {
  const chareMap = {};
  for (var i=0; i<input.length; i++) {
    console.log(input[i])
    if (chareMap[input[i]]) {
      return input[i];
    } else {
      chareMap[input[i]] = true
    }
  }
  return undefined;
}

firstRecurringChar([2,1,1,3,2,4,1,5]);
