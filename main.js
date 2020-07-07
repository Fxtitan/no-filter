/******************
 * YOUR CODE HERE *
 ******************/
const onlyOdds = (nums) => {
  let result = [];
  for (const num of nums) {
    if (num % 2 === 1) {
result.push(num)
    }

  }
  return result;
}
onlyOdds([1, 2, 3, 4])

const onlyEvens = (nums) => {
  let result = [];
  for (const num of nums) {
    if (num % 2 === 0) {
      result.push(num)

    }

  }
return result
}
onlyEvens([1, 2, 3, 4])

const shortNamesOnly = (names) => {
  let result = [];
  for (const name of names) {
    if (name.length < 7) {
      result.push(name)

    }

  }
return result
}
shortNamesOnly([
  'Colin',
  'Mesuara',
  'Chase',
  'Dallas',
  'Crystal',
  'Marc',
  'Miley',
  'Sharod',
])

const dNames = (names) => {
  let result = [];
  for (name of names) {
    if (name.includes('D')) {
      result.push(name)

    }

  }

return result;
}
dNames([
  'Colin',
  'Mesuara',
  'Chase',
  'Dallas',
  'Crystal',
  'Marc',
  'Miley',
  'Sharod',
])








/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
