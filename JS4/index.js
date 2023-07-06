function romain(rom) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let prev = 0
    let result = 0

    for(let i = rom.length - 1; i >= 0; i--) {
        let curr = map[rom[i]] 

        if(curr >= prev) {
            result += curr
        } else {
            result -= curr
        }

        prev = curr
    }

    return result
}

console.log(
    romain(prompt().toUpperCase())
);

function ArabRomain(number) {
  const romanNumerals = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
}
  
  let result = '';
  
  romanNumerals.forEach(roman => {
    while (number >= roman.value) {
      result += roman.numeral;
      number -= roman.value;
    } 
  });
  
  return result;
}

console.log(
  ArabRomain(prompt())
);