const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
}

function decode(text) {
	let textArray = []
  let symbArray = [[]]
  
  for (let i = 0; i < text.length / 10; i++) {
    textArray[i] = text.substr(i * 10, 10)
    symbArray.push([])
    for (let j = 0; j < 5; j++) {
      if (i === 0) {
        symbArray[i][j] = textArray[i].substr(j * 2, 2)
      } else {        
        symbArray[i][j] = textArray[i].substr(j * 2, 2)
      }
    }
  }  
  symbArray.pop()
  
  let resultArray = []
  
  for (let i = 0; i < symbArray.length; i++) {
    for (let j = 0; j < 5; j++) {
      if (symbArray[i][j] === '00') symbArray[i][j] = ''
      if (symbArray[i][j] === '10') symbArray[i][j] = '.'
      if (symbArray[i][j] === '11') symbArray[i][j] = '-'
    }
    
    resultArray.push(symbArray[i].join(''))
  }
  
  let resultLetters = []
  
  for (let i = 0; i < resultArray.length; i++) {
    if (resultArray[i] === "**********") {
      resultLetters.push(' ')
    } else {
      resultLetters.push(MORSE_TABLE[resultArray[i]])
    }
  }
  
  return resultLetters.join('')
}

module.exports = {
    decode
}