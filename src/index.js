module.exports = function toReadable (number) {
  const units = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };
  const tens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };

  let arr = String(number).split('').reverse();

  if (arr.length >= 2 && arr[1] == 1) {
    arr[0] = arr[1] + arr[0];
    arr.splice(1, 1, '0');
  }
  console.log(arr);

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 ) {
      if (  arr.length === 1 || arr[i] > 0 ) {
        res.push(units[arr[i]]);
      }
    } else if (i === 1 && arr[i] > 0) {
      console.log( arr[i] );
      res.push(tens[arr[i]]);
    } else if (i === 2 && arr[i] > 0) {
      res.push(units[arr[i]] + ' ' + 'hundred');
    }
  }
  return res.reverse().join(' ');
}
