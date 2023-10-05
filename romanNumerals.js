function toRomanLazy(num) {
  let result = "";
  const romanNumeralToArabic = {
      "M": 1000,
      "CM": 900,
      "D": 500,
      "C": 100,
      "XC": 90,
      "L": 50,
      "X": 10,
      "IX": 9,
      "V": 5,
      "I": 1,
  }
  for (const key in romanNumeralToArabic){
    const numberValue = romanNumeralToArabic[key];

    while (num >= romanNumeralToArabic[key]){
      num -= numberValue
      result += key
    }
    // const numValue = romanNumeralToArabic[key];
  }
  return result;
}

console.log(toRomanLazy(4))
console.log(toRomanLazy(150))
console.log(toRomanLazy(944))


function toRoman(num) {
  return "";
}

module.exports = { toRoman, toRomanLazy };
